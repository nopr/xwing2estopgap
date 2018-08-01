import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

import { Ship } from '@app/core/model/ship';
import { Upgrade } from '@app/core/model/upgrade';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  isCollapsed: boolean = false;
  actions: string[];
  attackValues: any[];

  @HostBinding('class.ship') attrClass: boolean = true;

  @ViewChild('f') form: NgForm;

  @Input() upgrades: Upgrade[];
  @Input() showAbilities: boolean;
  @Input() squad: Ship[];
  @Input() ship: Ship;
  @Input() index: number;
  @Input() points: number;

  @Output() updatePoints = new EventEmitter<number>();

  constructor() {}

  // Unused
  upgradeModel(upgrade:string): string {
    if (!upgrade) return undefined;

    return upgrade.split(',')[0];
  }

  // Unused
  updateUpgrade(ship: Ship, upgrade: string, newValue: string): string {
    const splitUpgrade = ship[upgrade].split(",");

    if (splitUpgrade.length !== 2) {
      this.ship[upgrade] = newValue;
      return this.ship[upgrade];
    }

    this.ship[upgrade] = `${newValue},${splitUpgrade[1]}`;

    this.updateSquadPoints();

    return ship[upgrade];
  }

  duplicateShip(): void {
    const ship: Ship = Object.assign({}, this.ship);
    this.squad.unshift(ship);
  }

  removeShip(): void {
    this.squad.splice(this.index, 1);
  }

  updateSquadPoints() {
    this.updatePoints.next();
  }

  getUpgradeByName(upgrade: string): string {
    if (!upgrade) return '';

    const upgrades = this.upgrades.filter(u => upgrade === u.name);

    return upgrades.length > 0 ? upgrades[0].ability : '';
  }

  checkUpgrade(upgrade: string): boolean {
    const shipUpgrade = this.ship[`${upgrade}Restriction`];
    if (!shipUpgrade && this.ship[upgrade] === undefined) return false;    
    if (!shipUpgrade) return true;

    let upgradeRequirement = shipUpgrade.split(":")[0];
    const requirementName = shipUpgrade.split(":")[1];

    const isRemove = upgradeRequirement.startsWith('!');
    upgradeRequirement = upgradeRequirement.replace('!','');
    const requirementSet = !isRemove && this.ship[upgradeRequirement] === requirementName || isRemove && this.ship[upgradeRequirement] !== requirementName;

    if (!requirementSet) this.ship[upgrade] = '';
    if (requirementSet && !this.ship[upgrade]) this.ship[upgrade] = ''

    return requirementSet;
  }

  changeUpgrade(model: any) {    
    // Reset if blank
    if (model.value === '') {
      model.control.reset('');
    }
  }

  updateUpgradeStatus(): void {
    setTimeout(() => {
      for (const field in this.form.form.controls) {
        const control = this.form.form.get(field);
        if (control.value !== '') {
          control.markAsDirty();
        }
      }
    });
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  createPrettyAttackValues(attackValues: string): any[] {
    const values: any[] = [];
    attackValues.split(',').forEach((value: string) => {

      let attack = {
        name: 'frontarc',
        value: '0'
      }

      // Front Arc
      if (value.length === 0) {
        attack.value = value;

      // Not Front Arc
      } else {
        attack.value = value.split('')[0];
        const attackFacing = value.split('')[value.length - 1];

        /*

          Match names to icon names

        */

        // Half Front
        if (attackFacing === 'h') {
          attack.name = 'fullfrontarc';
        // Single Turret
        } else if (attackFacing === 's') {
          attack.name = 'singleturretarc';
        // Double Turret
        } else if (attackFacing === 'd') {
          attack.name = 'doubleturretarc';
        // Rear Arc
        } else if (attackFacing === 'r') {
          attack.name = 'reararc';
        }
      }

      values.push(attack);
    });

    return values;
  }

  createPrettyAction(name: string): any {

    let action: any = {
      name: 'focus',
      difficulty: 'white'
    }

    action.name = name.replace(new RegExp(/[\[\]]/, 'g'), '').replace(new RegExp(/\s/, 'g'), '').toLowerCase();

    // Check Difficulty (Can't be red action into another red action so don't have to check for that later)
    if (RegExp(/^red/).test(action.name)) {
      action.difficulty = 'red';
      action.name = action.name.replace(new RegExp(/^red/, 'g'), '');
    }

    /*

      Match names to icon names

    */

    if (action.name === 'lock') {
      action.name = 'targetlock';
    }

    return action;
  }

  createPrettyActions(actionValues: string): any[] {
    const values: any[] = [];

    actionValues.split(',').forEach((value: string) => {

      let action = this.createPrettyAction(value);

      // Linked Actions
      if (value.indexOf('-') >= 0) {

        let linkedAction = this.createPrettyAction(action.name.split('-')[1]);
        action.name = action.name.split('-')[0]

        /*

          Match names to icon names

        */

        if (action.name === 'lock') {
          action.name = 'targetlock';
        }

        action.linkedAction = linkedAction;
      }

      values.push(action);
    });

    return values;
  }

  ngOnInit(): void {
    this.updateUpgradeStatus();
    this.attackValues = this.createPrettyAttackValues(this.ship.attack);
    this.actions = this.createPrettyActions(this.ship.actions);

    // Todo: Dan I'm sorry, this looks hacky, but it works :D
    this.form.valueChanges.subscribe(val => {
      this.ship.torpedo1 = val['torpedo1'];
    })
  }
}

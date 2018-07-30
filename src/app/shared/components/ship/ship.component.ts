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

  @HostBinding('class.ship') attrClass: boolean = true;

  @ViewChild('f') form: NgForm;

  @Input() ships: Ship[];
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
    const ship: Ship = this.squad[this.index];
    this.squad.unshift(ship);
  }

  removeShip(): void {
    this.squad.splice(this.index, 1);
  }

  updateSquadPoints() {
    this.updatePoints.next();
  }

  getUpgradeByName(upgrade: string): string {
    const upgrades = this.upgrades.filter(u => upgrade.split(',')[0].indexOf(u.name) > -1);

    return upgrades.length > 0 ? upgrades[0].ability : '';
  }

  checkUpgrade(upgrade: string): boolean {
    const shipUpgrade = this.ship[upgrade];
    if (!shipUpgrade) return false;

    const splitUpgrade = shipUpgrade.split(",");
    if (splitUpgrade.length != 2) return false;

    const upgradeRequirement = splitUpgrade[1].split(":")[0];
    const requirementName = splitUpgrade[1].split(":")[1];

    const requirementSet = this.ship[upgradeRequirement] === requirementName;

    if (!requirementSet) this.ship[upgrade] = `,${splitUpgrade[1]}`;

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

  ngOnInit(): void {
    this.updateUpgradeStatus();
  }
}

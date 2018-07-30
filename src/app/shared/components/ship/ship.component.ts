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

  duplicateShip(squad, index): void {
    const ship = squad[index];
    squad.unshift({...ship});
  }

  removeShip(squad, index): void {
    squad.splice(index, 1);
  }

  updateSquadPoints() {
    this.updatePoints.next();
  }

  getUpgradeByName(upgrades: Upgrade[], upgrade: string): string {
    upgrades = upgrades.filter(u => upgrade.split(',')[0].indexOf(u.name) > -1);

    return upgrades.length > 0 ? upgrades[0].ability : '';
  }

  upgradeModel(upgrade:string): string {
    if (!upgrade) return undefined;

    return upgrade.split(',')[0];
  }

  checkUpgrade(ship: Ship, upgrade: string): boolean {
    const shipUpgrade = ship[upgrade];
    if (!shipUpgrade) return false;

    const splitUpgrade = shipUpgrade.split(",");
    if (splitUpgrade.length != 2) return false;

    const upgradeRequirement = splitUpgrade[1].split(":")[0];
    const requirementName = splitUpgrade[1].split(":")[1];

    const requirementSet = ship[upgradeRequirement] === requirementName;

    if (!requirementSet) ship[upgrade] = `,${splitUpgrade[1]}`;

    return requirementSet;
  }

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

  ngOnInit(): void {
    this.updateUpgradeStatus();
  }
}

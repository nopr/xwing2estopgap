import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ship} from '../../model/ship';
import {Upgrade} from '../../model/upgrade';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  @Input() ships: Ship[];
  @Input() upgrades: Upgrade[];
  @Input() showAbilities: boolean;
  @Input() squad: Ship[];
  @Input() ship: Ship;
  @Input() index: number;
  @Input() points: number;

  @Output() updatePoints = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
  }

  duplicateShip(squad, index): void {
    const ship = squad[index];
    squad.push({...ship});
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
}

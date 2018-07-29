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

  constructor() { }

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
    upgrades = upgrades.filter(u => upgrade.indexOf(u.name) > -1);

    return upgrades.length > 0 ? upgrades[0].ability : '';
  }
}

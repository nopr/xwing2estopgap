import { Component } from '@angular/core';

import { Ship } from '@app/core/model/ship';
import { Upgrade } from '@app/core/model/upgrade';
import { DataService } from '@app/core/services/data/data.service';

@Component({
  selector: 'app-imperials',
  templateUrl: './imperials.component.html'
})
export class ImperialsComponent {

  ships: Ship[];
  upgrades: Upgrade[];
  faction: string = 'imperial';

  constructor(
    private dataService: DataService
  ) {
    this.ships = this.dataService.getImperials();
    this.upgrades = this.dataService.getImperialUpgrades();
  }
}

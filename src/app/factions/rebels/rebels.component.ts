import { Component } from '@angular/core';

import { Ship } from '../../model/ship';
import { Upgrade } from '../../model/upgrade';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rebels',
  templateUrl: './rebels.component.html'
})
export class RebelsComponent {

  ships: Ship[];
  upgrades: Upgrade[];
  faction: string = 'rebels';

  constructor(
    private dataService: DataService
  ) {
    this.ships = this.dataService.getRebels();
    this.upgrades = this.dataService.getRebelUpgrades();
  }
}

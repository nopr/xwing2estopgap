import { Component } from '@angular/core';

import { Ship } from '@app/core/model/ship';
import { Upgrade } from '@app/core/model/upgrade';
import { DataService } from '@app/core/services/data/data.service';

@Component({
  selector: 'app-scum',
  templateUrl: './scum.component.html'
})
export class ScumComponent {

  ships: Ship[];
  upgrades: Upgrade[];
  faction: string = 'scum';

  constructor(
    private dataService: DataService
  ) {
    this.ships = this.dataService.getScum();
    this.upgrades = this.dataService.getScumUpgrades();
  }
}

import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'X-Wing 2nd Edition Stop Gap';

  constructor(public dataService: DataService) {
    dataService.getRebels();
    dataService.getRebelUpgrades();
    dataService.getImperials();
    dataService.getImperialUpgrades();
    dataService.getScum();
    dataService.getScumUpgrades();
    dataService.getUpgrades();
  }
}

import {Component, OnInit} from '@angular/core';
import {Ship} from '../../model/ship';
import {Upgrade} from '../../model/upgrade';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  dataService: DataService;

  showAbilities: boolean;

  rebelShips: Ship[];
  imperialShips: Ship[];
  scumShips: Ship[];
  genericUpgrades: Upgrade[];
  rebelUpgrades: Upgrade[];
  imperialUpgrades: Upgrade[];
  scumUpgrades: Upgrade[];

  rebelSquad: Ship[];
  imperialSquad: Ship[];
  scumSquad: Ship[];

  rebelPoints: number;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.showAbilities = true;

    this.rebelShips = this.dataService.getRebels();
    this.imperialShips = this.dataService.getImperials();
    this.scumShips = this.dataService.getScum();

    this.genericUpgrades = this.dataService.getUpgrades();
    this.rebelUpgrades = this.dataService.getRebelUpgrades();
    this.imperialUpgrades = this.dataService.getImperialUpgrades();
    this.scumUpgrades = this.dataService.getScumUpgrades();

    this.rebelSquad = [];
  }

  hasShipDataLoaded(): boolean {
    return Object.keys(this.rebelShips).length > 0 &&
           Object.keys(this.imperialShips).length > 0 &&
           Object.keys(this.scumShips).length > 0;
  }

  hasUpgradeDataLoaded(): boolean {
    return this.rebelUpgrades.length > 0 &&
           this.imperialUpgrades.length > 0 &&
           this.scumUpgrades.length > 0;
  }

  toggleShowAbilities(): void {
    this.showAbilities = !this.showAbilities;
  }

  squadPoints(faction: Ship[], squad: Ship[]) {
    var points = 0;

    squad.forEach(s => {
      var pilot = this.getShipByPilot(faction, s.pilot);
      if (pilot) points += pilot.cost;
    });

    return points;
  }

  addShip(squad): void {
    squad.push(new Ship('','','','','','',''));
  }

  rebelShipNames(): string[] {
    let output = [];

   this.rebelShips.forEach(s => {
     if (output.indexOf(s.name) === -1) output.push(s.name);
   })

    return output;
  }

  getPilotAbility(faction: Ship[], ship: Ship): string {
    var pilots = faction.filter(factionShip => factionShip.pilot == ship.pilot);

    return pilots.length > 0 ? pilots[0].pilotAbility : '';
  }

  getShipAbility(faction: Ship[], shipName: string): string {
    var ships = faction.filter(ship => ship.name == shipName);

    return ships.length > 0 ? ships[0].shipAbility : ''
  }

  getShipByPilot(faction: Ship[], pilot: string): Ship {
    var pilots = faction.filter(factionShip => factionShip.pilot == pilot);

    return pilots.length > 0 ? pilots[0] : undefined;
  }
}

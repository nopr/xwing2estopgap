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

  searchValue: string;
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
    this.rebelSquad = [];
    this.imperialSquad = [];
    this.scumSquad = [];
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

  toggleShowAbilities(): void {
    this.showAbilities = !this.showAbilities;
  }

  squadPoints(faction: Ship[], factionUpgrades: Upgrade[], squad: Ship[]) {
    let points = 0;

    squad.forEach(s => {
      points += s.cost;
      points += this.pointsForUpgrade(factionUpgrades, s.talent);
      points += this.pointsForUpgrade(factionUpgrades, s.system);
      points += this.pointsForUpgrade(factionUpgrades, s.cannon1);
      points += this.pointsForUpgrade(factionUpgrades, s.cannon2);
      points += this.pointsForUpgrade(factionUpgrades, s.torpedo1);
      points += this.pointsForUpgrade(factionUpgrades, s.modification1);
      points += this.pointsForUpgrade(factionUpgrades, s.modification2);
      points += this.pointsForUpgrade(factionUpgrades, s.modification3);
      points += this.pointsForUpgrade(factionUpgrades, s.crew1);
      points += this.pointsForUpgrade(factionUpgrades, s.crew2);
      points += this.pointsForUpgrade(factionUpgrades, s.crew3);
      points += this.pointsForUpgrade(factionUpgrades, s.gunner1);
      points += this.pointsForUpgrade(factionUpgrades, s.astromech);
      points += this.pointsForUpgrade(factionUpgrades, s.force);
      points += this.pointsForUpgrade(factionUpgrades, s.turret);
      points += this.pointsForUpgrade(factionUpgrades, s.title);
      points += this.pointsForUpgrade(factionUpgrades, s.device1);
      points += this.pointsForUpgrade(factionUpgrades, s.device2);
      points += this.pointsForUpgrade(factionUpgrades, s.missile1);
      points += this.pointsForUpgrade(factionUpgrades, s.missile2);
      points += this.pointsForUpgrade(factionUpgrades, s.configuration);
      points += this.pointsForUpgrade(factionUpgrades, s.illicit1);
      points += this.pointsForUpgrade(factionUpgrades, s.illicit2);
      points += this.pointsForUpgrade(factionUpgrades, s.tech);
    });

    return points;
  }

  private pointsForUpgrade(upgrades: Upgrade[], upgrade: string) {
    upgrades = upgrades.filter(u => u.name == upgrade);
    return upgrades.length > 0 ? upgrades[0].cost : 0;
  }

  addShip(squad, ship): void {
    squad.push(ship);
    this.searchValue = '';
  }

  getShipByPilot(faction: Ship[], pilot: string): Ship {
    let pilots = faction.filter(factionShip => factionShip.pilot == pilot);

    return pilots.length > 0 ? pilots[0] : undefined;
  }

  getUpgradeByName(upgrades: Upgrade[], upgrade: string): string {
    upgrades = upgrades.filter(u => u.name == upgrade);

    return upgrades.length > 0 ? upgrades[0].ability : '';
  }
}

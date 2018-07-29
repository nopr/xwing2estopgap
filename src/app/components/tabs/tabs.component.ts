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
  showLink: boolean;

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
  imperialPoints: number;
  scumPoints: number;

  rebelSquadLink: string;
  imperialSquadLink: string;
  scumSquadLink: string;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.rebelSquad = [];
    this.imperialSquad = [];
    this.scumSquad = [];

    this.showLink = false;
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

    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.has('squad')) {
      this.importSquad(queryParams.get('squad'));
    }

  }

  toggleShowAbilities(): void {
    this.showAbilities = !this.showAbilities;
  }

  squadPoints(faction: Ship[], factionUpgrades: Upgrade[], squad: Ship[]) {
    let points = 0;

    squad.forEach(s => {
      points += s.cost;
      points += this.pointsForUpgrade(s, factionUpgrades, s.talent);
      points += this.pointsForUpgrade(s, factionUpgrades, s.sensor);
      points += this.pointsForUpgrade(s, factionUpgrades, s.cannon1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.cannon2);
      points += this.pointsForUpgrade(s, factionUpgrades, s.torpedo1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.modification1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.modification2);
      points += this.pointsForUpgrade(s, factionUpgrades, s.modification3);
      points += this.pointsForUpgrade(s, factionUpgrades, s.crew1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.crew2);
      points += this.pointsForUpgrade(s, factionUpgrades, s.crew3);
      points += this.pointsForUpgrade(s, factionUpgrades, s.gunner1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.astromech);
      points += this.pointsForUpgrade(s, factionUpgrades, s.force);
      points += this.pointsForUpgrade(s, factionUpgrades, s.turret);
      points += this.pointsForUpgrade(s, factionUpgrades, s.title);
      points += this.pointsForUpgrade(s, factionUpgrades, s.device1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.device2);
      points += this.pointsForUpgrade(s, factionUpgrades, s.missile1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.missile2);
      points += this.pointsForUpgrade(s, factionUpgrades, s.configuration);
      points += this.pointsForUpgrade(s, factionUpgrades, s.illicit1);
      points += this.pointsForUpgrade(s, factionUpgrades, s.illicit2);
      points += this.pointsForUpgrade(s, factionUpgrades, s.tech);
    });

    this.showLink = false;

    return points;
  }

  createExportLink(faction: string, squad: Ship[]) : void {
    let output = { faction: faction, squad: squad };
    let value = btoa(JSON.stringify(output));
    let link = `${window.location}?squad=${value}`;

    switch (faction) {
      case 'Rebels':
        this.rebelSquadLink = link;
      case 'Imperial':
        this.imperialSquadLink = link;
      case 'Scum':
        this.scumSquadLink = link;
    }

    this.showLink = true;
  }

  importSquad(data: string): void {
    let input = JSON.parse(atob(data));

    if (input.faction === 'Rebels') this.rebelSquad = input.squad;
    else if (input.faction === 'Imperial') this.rebelSquad = input.squad;
    else if (input.faction === 'Scum') this.rebelSquad = input.squad;
  }

  private pointsForUpgrade(ship: Ship, upgrades: Upgrade[], upgrade: string) {
    if (!upgrade) return 0;

    upgrades = upgrades.filter(u => upgrade.split(",")[0].indexOf(u.name) > -1);

    if(upgrades.length === 0) return 0;

    const splitCosts = upgrades[0].cost.split(',');

    if (splitCosts.length === 1) return parseInt(splitCosts[0]);

    let cost;
    if (splitCosts.length === 3) {
      console.log(ship);
      cost = ship.size === 'Small' ? splitCosts[0] : ship.size === 'Medium' ? splitCosts[1] : splitCosts[2];
    }

    return parseInt(cost);
  }

  addShip(squad, ship): void {
    squad.push({...ship});
    this.searchValue = '';
  }

  removeShip(squad, index): void {
    squad.splice(index, 1);
  }

  getUpgradeByName(upgrades: Upgrade[], upgrade: string): string {
    upgrades = upgrades.filter(u => u.name == upgrade);

    return upgrades.length > 0 ? upgrades[0].ability : '';
  }

  getUpgrade(upgrades: Upgrade[], upgrade: string): Upgrade {
    upgrades = upgrades.filter(u => u.name === upgrade);

    return upgrades.length > 0 ? upgrades[0] : undefined;
  }
}

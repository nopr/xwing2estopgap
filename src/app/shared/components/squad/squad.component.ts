import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Ship } from '@app/core/model/ship';
import { Upgrade } from '@app/core/model/upgrade';

type Factions = 'rebels' | 'imperial' | 'scum';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  @HostBinding('class.squad') attrClass: boolean = true;

  @Input() faction: Factions;
  @Input() ships: Ship[];
  @Input() upgrades: Upgrade[];

  showAbilities: boolean = true;
  showLink: boolean = false;
  squadLink: string;

  squad: Ship[] = [];
  points: number;

  constructor() { }

  ngOnInit(): void {
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

  createExportLink(): void {
    const faction = this.faction.charAt(0).toUpperCase() + this.faction.slice(1); // Uppercase first character
    let output = { faction: faction, squad: this.squad };
    let value = btoa(JSON.stringify(output));
    let link = `${window.location}?squad=${value}`;

    this.squadLink = link;
    this.showLink = true;
  }

  viewSquad(): void {
    // placeholder
  }

  importSquad(data: string): void {
    let input = JSON.parse(atob(data));
    this.squad = input.squad;
  }

  private pointsForUpgrade(ship: Ship, upgrades: Upgrade[], upgrade: string) {
    if (!upgrade) return 0;

    upgrades = upgrades.filter(u => upgrade.split(",")[0].indexOf(u.name) > -1);

    if(upgrades.length === 0) return 0;

    const splitCosts = upgrades[0].cost.split(',');

    if (splitCosts.length === 1) return parseInt(splitCosts[0]);

    let cost;
    if (splitCosts.length === 3) {
      cost = ship.size === 'Small' ? splitCosts[0] : ship.size === 'Medium' ? splitCosts[1] : splitCosts[2];
    }

    if (splitCosts.length === 4) {
      cost = ship.agility === 0 ? splitCosts[0] : ship.agility === 1 ? splitCosts[1] : ship.agility === 2 ? splitCosts[2] : splitCosts[3];
    }

    return parseInt(cost);
  }

  addShip(ship: Ship): void {
    this.squad.unshift(Object.assign({}, ship));
  }
}

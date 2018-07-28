import { Injectable } from '@angular/core';
import {Ship} from '../model/ship';
import {Upgrade} from '../model/upgrade';
import {HttpClient} from '@angular/common/http';
import {Spreadsheet} from '../model/spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  basePath = (sheet, range) => `https://sheets.googleapis.com/v4/spreadsheets/1j02xeXgUu4iv4HDYI0qnniWX8W2MOewePlDvMtfYn8M/values/${sheet}!A2:${range}?key=AIzaSyDkg_9fUIBDkc2xsgAoxV5c355Jgua47nw`;

  constructor(private http: HttpClient) { }

  getRebels(): Ship[] {
    let ships = [];

    this.http.get(this.basePath('Rebel', 'AA')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let ship = data[row];

        let rebel = new Ship(ship[0], ship[1], ship[2], ship[3], ship[4], ship[5], ship[6]);
        rebel.talent = rebel.value(ship[7]);
        rebel.system = rebel.value(ship[8]);
        rebel.cannon1 = rebel.value(ship[9]);
        rebel.cannon2 = rebel.value(ship[10]);
        rebel.torpedo1 = rebel.value(ship[11]);
        rebel.modification1 = rebel.value(ship[12]);
        rebel.modification2 = rebel.value(ship[13]);
        rebel.crew1 = rebel.value(ship[14]);
        rebel.crew2 = rebel.value(ship[15]);
        rebel.gunner1 = rebel.value(ship[16]);
        rebel.astromech = rebel.value(ship[17]);
        rebel.force = rebel.value(ship[18]);
        rebel.turret = rebel.value(ship[19]);
        rebel.title = rebel.value(ship[20]);
        rebel.device1 = rebel.value(ship[21]);
        rebel.device2 = rebel.value(ship[22]);
        rebel.missile1 = rebel.value(ship[23]);
        rebel.missile2 = rebel.value(ship[24]);
        rebel.configuration = rebel.value(ship[25]);
        rebel.illicit1 = rebel.value(ship[26]);

        ships.push(rebel);
      }
    });

    return ships;
  }

  getRebelUpgrades(): Upgrade[] {
    let upgrades = [];

    this.http.get(this.basePath('RebelUpgrades', 'F')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let upgrade = data[row];
        let rebelUpgrade = new Upgrade(upgrade[0], upgrade[1], upgrade[2], upgrade[3], upgrade[4], upgrade[5]);

        upgrades.push(rebelUpgrade);
      }
    });

    return upgrades;
  }

  getImperials(): Ship[] {
    let ships = [];

    this.http.get(this.basePath('Imperial', 'X')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let ship = data[row];

        let imperial = new Ship(ship[0], ship[1], ship[2], ship[3], ship[4], ship[5], ship[6]);
        imperial.talent = imperial.value(ship[7]);
        imperial.system = imperial.value(ship[8]);
        imperial.torpedo1 = imperial.value(ship[9]);
        imperial.missile1 = imperial.value(ship[10]);
        imperial.missile2 = imperial.value(ship[11]);
        imperial.modification1 = imperial.value(ship[12]);
        imperial.modification2 = imperial.value(ship[13]);
        imperial.configuration = imperial.value(ship[14]);
        imperial.cannon1 = imperial.value(ship[15]);
        imperial.crew1 = imperial.value(ship[16]);
        imperial.crew2 = imperial.value(ship[17]);
        imperial.title = imperial.value(ship[18]);
        imperial.force = imperial.value(ship[19]);
        imperial.turret = imperial.value(ship[20]);
        imperial.gunner1 = imperial.value(ship[21]);
        imperial.device1 = imperial.value(ship[22]);
        imperial.device2 = imperial.value(ship[23]);
        imperial.cannon2 = imperial.value(ship[10]);

        ships.push(imperial);
      }
    });

    return ships;
  }

  getImperialUpgrades(): Upgrade[] {
    let upgrades = [];

    this.http.get(this.basePath('ImperialUpgrades', 'F')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let upgrade = data[row];
        let imperialUpgrade = new Upgrade(upgrade[0], upgrade[1], upgrade[2], upgrade[3], upgrade[4], upgrade[5]);

        upgrades.push(imperialUpgrade);
      }
    });

    return upgrades;
  }

  getScum(): Ship[] {
    let ships = [];

    this.http.get(this.basePath('Scum', 'AC')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let ship = data[row];

        let scum = new Ship(ship[0], ship[1], ship[2], ship[3], ship[4], ship[5], ship[6]);
        scum.talent = scum.value(ship[7]);
        scum.system = scum.value(ship[8]);
        scum.cannon1 = scum.value(ship[9]);
        scum.cannon2 = scum.value(ship[10]);
        scum.device1 = scum.value(ship[11]);
        scum.device2 = scum.value(ship[12]);
        scum.illicit1 = scum.value(ship[13]);
        scum.illicit2 = scum.value(ship[14]);
        scum.modification1 = scum.value(ship[15]);
        scum.modification2 = scum.value(ship[16]);
        scum.modification3 = scum.value(ship[17]);
        scum.title = scum.value(ship[18]);
        scum.turret = scum.value(ship[19]);
        scum.torpedo1 = scum.value(ship[20]);
        scum.gunner1 = scum.value(ship[21]);
        scum.astromech = scum.value(ship[22]);
        scum.missile1 = scum.value(ship[23]);
        scum.crew1 = scum.value(ship[24]);
        scum.crew2 = scum.value(ship[25]);
        scum.crew3 = scum.value(ship[26]);
        scum.force = scum.value(ship[27]);
        scum.tech = scum.value(ship[27]);

        ships.push(scum);
      }
    });

    return ships;
  }

  getScumUpgrades(): Upgrade[] {
    let upgrades = [];

    this.http.get(this.basePath('ScumUpgrades', 'F')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let upgrade = data[row];
        let scumUpgrade = new Upgrade(upgrade[0], upgrade[1], upgrade[2], upgrade[3], upgrade[4], upgrade[5]);

        upgrades.push(scumUpgrade);
      }
    });

    return upgrades;
  }

  getUpgrades(): Upgrade[] {
    let upgrades = [];

    this.http.get(this.basePath('Upgrades', 'F')).subscribe(val => {
      let data = (val as Spreadsheet).values;
      for (let row in data) {
        let upgrade = data[row];
        let genericUpgrade = new Upgrade(upgrade[0], upgrade[1], upgrade[2], upgrade[3], upgrade[4], upgrade[5]);

        upgrades.push(genericUpgrade);
      }
    });

    return upgrades;
  }
}
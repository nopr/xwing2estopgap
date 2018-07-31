export class Ship {

  name: string;
  cost: number;
  pilot: string;
  unique: boolean;
  faction: string;
  shipAbility: string;
  pilotAbility: string;
  talent: string;
  sensor: string;
  cannon1: string;
  cannon2: string;
  torpedo1: string;
  torpedo2: string;
  modification1: string;
  modification2: string;
  modification3: string;
  crew1: string;
  crew2: string;
  crew3: string;
  gunner1: string;
  astromech: string;
  force: string;
  turret: string;
  title: string;
  device1: string;
  device2: string;
  missile1: string;
  missile2: string;
  configuration: string;
  illicit1: string;
  illicit2: string;
  tech: string;
  size: string;
  initiative: number;
  attack: string;
  agility: number;
  hull: number;
  shields: number;

  constructor(name: string, cost: string, pilot: string, unique: string, faction: string, shipAbility: string, pilotAbility: string, size: string, agility: string, initiative: string, attack: string, hull: string, shields: string) {
    this.name = name;
    this.cost = parseInt(cost);
    this.pilot = pilot;
    this.unique = unique === 'TRUE' ? true : false;
    this.faction = faction;
    this.shipAbility = shipAbility;
    this.pilotAbility = pilotAbility;
    this.size = size;
    this.initiative = parseInt(initiative);
    this.attack = attack;
    this.agility = parseInt(agility);
    this.hull = parseInt(hull);
    this.shields = parseInt(shields);
  }

  value(value: string): string {
    if (!value) return undefined;

    return value === 'TRUE' ? '' : value === '' ? undefined : `,${value}`;
  }
}


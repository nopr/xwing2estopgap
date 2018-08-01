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
  sensorRestriction: string;
  cannon1: string;
  cannon1Restriction: string;
  cannon2: string;
  torpedo1: string;
  torpedo1Restriction: string;
  torpedo2: string;
  modification1: string;
  modification2: string;
  modification2Restriction: string;
  modification3: string;
  crew1: string;
  crew1Restriction: string;
  crew2: string;
  crew3: string;
  gunner1: string;
  gunner1Restriction: string;
  astromech: string;
  astromechRestriction: string;
  force: string;
  turret: string;
  title: string;
  device1: string;
  device2: string;
  device2Restriction: string;
  missile1: string;
  missile2: string;
  missile2Restriction: string;
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
  actions: string;
  forcePoints: number;
  totalCost: number;

  constructor(name: string, cost: string, pilot: string, unique: string, faction: string, shipAbility: string, pilotAbility: string, size: string, agility: string, initiative: string, attack: string, hull: string, shields: string, actions: string) {
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
    this.actions = actions;
    this.totalCost = this.cost;
  }

  value(value: string): string {
    if (!value) return undefined;

    return value === 'TRUE' ? '' : value === '' ? undefined : undefined;
  }

  public setValue(restriction: string, value: string): string {
    if (value === 'TRUE') return '';
    if (value === undefined || value === '') return undefined;

    this[restriction] = value;

    return undefined;
  }
}

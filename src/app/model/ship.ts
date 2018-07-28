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

  constructor(name: string, cost: string, pilot: string, unique: string, faction: string, shipAbility: string, pilotAbility: string) {
    this.name = name;
    this.cost = parseInt(cost);
    this.pilot = pilot;
    this.unique = unique === 'TRUE' ? true : false;
    this.faction = faction;
    this.shipAbility = shipAbility;
    this.pilotAbility = pilotAbility;
  }

  value(value: string): string {
    return value === 'TRUE' ? '' : undefined;
  }
}


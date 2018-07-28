export class Upgrade {

  name: string;
  cost: number;
  unique: boolean;
  ability: string;
  type: string;
  restriction: string;

  constructor(name: string, cost: string, unique: string, ability: string, type: string, restriction: string) {
    this.name = name;
    this.cost = parseInt(cost);
    this.unique = unique === 'TRUE';
    this.ability = ability;
    this.type = type;
    this.restriction = restriction;
  }
}

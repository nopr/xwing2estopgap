export class Upgrade {

  name: string;
  cost: string;
  unique: boolean;
  ability: string;
  type: string;
  restriction: string;

  constructor(name: string, cost: string, unique: string, ability: string, type: string, restriction: string) {
    this.name = name;
    this.cost = cost;
    this.unique = unique === 'TRUE';
    this.ability = ability;
    this.type = type;
    this.restriction = restriction;
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {Ship} from '../model/ship';

@Pipe({name: 'forShip', pure: false})
export class ForShip implements PipeTransform {
  transform(ships: Ship[], shipName: string) {
    return ships.filter(ship => ship.name === shipName);
  }
}

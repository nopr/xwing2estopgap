import { Pipe, PipeTransform } from '@angular/core';

import { Ship } from '@app/core/model/ship';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {

  transform(ships: Ship[], search: string): any {
    if (!search || search === '') return [];

    search = search.toLowerCase();
    return ships.filter(s => s.name.toLowerCase().indexOf(search) > -1 || s.pilot.toLowerCase().indexOf(search) > -1);
  }
}

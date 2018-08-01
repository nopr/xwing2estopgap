import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { Ship } from '@app/core/model/ship';

@Component({
  selector: 'app-ship-search',
  templateUrl: './ship-search.component.html',
  styleUrls: ['./ship-search.component.scss']
})
export class ShipSearchComponent {

  @HostBinding('class.ship-search') attrClass: boolean = true;

  @Input() ships: Ship[];

  @Output() selectedShip: EventEmitter<Ship> = new EventEmitter<Ship>();

  searchValue: string;
  showAll: boolean;

  selectShip(ship): void {
    this.searchValue = null;
    this.showAll = false;
    this.selectedShip.emit(ship);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.searchValue = null;
  }

}

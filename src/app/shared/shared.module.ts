import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { AlertComponent } from './components/alert/alert.component';
import { ShipComponent } from './components/ship/ship.component';
import { ShipSearchComponent } from './components/ship-search/ship-search.component';
import { SquadComponent } from './components/squad/squad.component';

// Pipes
import { ForShip } from './pipes/ship.pipe';
import { ForUpgrade } from './pipes/upgrade.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AlertComponent,
    ShipComponent,
    ShipSearchComponent,
    SquadComponent,
    ForShip,
    ForUpgrade,
    SearchFilterPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    AlertComponent,
    ShipComponent,
    ShipSearchComponent,
    SquadComponent,
    ForShip,
    ForUpgrade,
    SearchFilterPipe
  ]
})
export class SharedModule { }

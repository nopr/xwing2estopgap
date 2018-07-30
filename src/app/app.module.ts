import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Factions
import { ImperialsComponent } from './factions/imperials/imperials.component';
import { RebelsComponent } from './factions/rebels/rebels.component';
import { ScumComponent } from './factions/scum/scum.component';

// Components
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShipComponent } from './components/ship/ship.component';
import { ShipSearchComponent } from './components/ship-search/ship-search.component';
import { SquadComponent } from './components/squad/squad.component';

// Pips
import { ForShip } from './pipes/ship.pipe';
import { ForUpgrade } from './pipes/upgrade.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImperialsComponent,
    RebelsComponent,
    AlertComponent,
    HeaderComponent,
    NavigationComponent,
    ScumComponent,
    ShipComponent,
    ShipSearchComponent,
    SquadComponent,
    ForShip,
    ForUpgrade,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

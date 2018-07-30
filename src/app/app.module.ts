import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Factions
import { ImperialsComponent } from './factions/imperials/imperials.component';
import { RebelsComponent } from './factions/rebels/rebels.component';
import { ScumComponent } from './factions/scum/scum.component';

@NgModule({
  declarations: [
    AppComponent,
    ImperialsComponent,
    RebelsComponent,
    ScumComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

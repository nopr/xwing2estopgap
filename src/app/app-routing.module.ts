import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Factions
import { RebelsComponent } from './factions/rebels/rebels.component';
import { ImperialsComponent } from './factions/imperials/imperials.component';
import { ScumComponent } from './factions/scum/scum.component';

const routes: Routes = [
  { path: '', redirectTo: '/rebels', pathMatch: 'full' },
  { path: 'rebels', component: RebelsComponent },
  { path: 'imperials', component: ImperialsComponent },
  { path: 'scum', component: ScumComponent, },
  { path: '**', redirectTo: 'rebels' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

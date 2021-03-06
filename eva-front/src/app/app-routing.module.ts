import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps/maps.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import {InstitutionsComponent } from './institutions/institutions.component';


const routes: Routes = [
  // { path: 'maps/:name/:city/:street/:number', component: MapsComponent },
  { path: '', component: OccurrencesComponent },
  { path: 'maps/:id', component: MapsComponent },
  { path: 'institutions', component: InstitutionsComponent },
  { path: 'admin/analytics', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

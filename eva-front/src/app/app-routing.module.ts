import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  // { path: 'maps/:name/:city/:street/:number', component: MapsComponent },
  { path: 'maps/:address', component: MapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

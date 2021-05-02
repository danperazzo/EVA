import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps/maps.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'maps/:name/:city/:street/:number', component: MapsComponent },
  {path:'',component: AppComponent},
  { path: 'maps/:address', component: MapsComponent },
  { path: 'admin/analytics', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

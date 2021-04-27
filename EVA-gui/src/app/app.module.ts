import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { OccurencesComponent } from './occurences/occurences.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionsComponent,
    OccurencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

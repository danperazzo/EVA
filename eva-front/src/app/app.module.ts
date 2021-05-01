import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { SafePipe } from './safe.pipe';
import { ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import { Institutions2Component } from './institutions2/institutions2.component';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionsComponent,
    OccurrencesComponent,
    SafePipe,
    MapsComponent,
    Institutions2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    OrderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

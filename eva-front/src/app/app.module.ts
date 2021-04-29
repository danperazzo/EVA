import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { OccurencesComponent } from './occurences/occurences.component';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionsComponent,
    OccurencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

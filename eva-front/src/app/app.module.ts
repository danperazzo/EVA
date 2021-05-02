
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { SafePipe } from './safe.pipe';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import { OrderListModule } from 'primeng/orderlist';
import {ListboxModule} from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { OccurrenceService } from './occurrence.service'
import { AdminComponent } from './admin/admin.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AdminServices } from './admin.service';
import { ChartModule } from 'primeng/chart';





@NgModule({
  declarations: [
    AppComponent,
    InstitutionsComponent,
    OccurrencesComponent,
    SafePipe,
    MapsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    OrderListModule,
    CheckboxModule,
    FormsModule,
    ListboxModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
    ChartModule,
  ],
  providers: [OccurrenceService, AdminServices],
  bootstrap: [AppComponent],
})
export class AppModule {}

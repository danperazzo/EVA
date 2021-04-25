import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetasComponent } from './metas.component';
import { OcurrencesComponent } from './occurrences.component';
import { AdminServices } from './admin.service';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    OcurrencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: OcurrencesComponent
      }
    ])
  ],
  providers: [AdminServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

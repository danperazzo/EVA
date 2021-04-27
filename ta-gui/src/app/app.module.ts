import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { AdminServices } from './admin.service';

@NgModule({
  declarations: [
    AppComponent,
    OccurrencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'alunos',
        component: OccurrencesComponent
      }
    ])
  ],
  providers: [AdminServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { GetListComponent } from './components/get-list/get-list.component';
import { FlightService } from './flight.service';
import { DateTimePipe } from './date-time.pipe';
import { FlightResultsComponent } from './components/flight-results/flight-results.component';
import {  RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    GetListComponent,
    
    FlightResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'flight-results', component: FlightResultsComponent }
    ])
  ],
  providers: [FlightService, DateTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

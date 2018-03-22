import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5eQniYJCql71bD7mffKxVBCNr1hIV7JU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

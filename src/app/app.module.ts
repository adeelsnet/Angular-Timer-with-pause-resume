import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerFormComponent } from './components/timer-form/timer-form.component';
import { TimerBodyComponent } from './components/timer-body/timer-body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './components/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TimerFormComponent,
    TimerBodyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

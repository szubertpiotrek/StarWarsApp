import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainLeftButtonComponent } from './main-left-button/main-left-button.component';
import { MainRightButtonComponent } from './main-right-button/main-right-button.component';
import { MainShowElementsComponent } from './main-show-elements/main-show-elements.component';
import {PlanetsService} from "./planets.service";
import { MainSearchInputComponent } from './main-search-input/main-search-input.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainListComponent,
    MainLeftButtonComponent,
    MainRightButtonComponent,
    MainShowElementsComponent,
    MainSearchInputComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

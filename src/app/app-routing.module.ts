import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {MainViewElementComponent} from "./main-view-element/main-view-element.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: `view/:number`, component: MainViewElementComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [MainViewElementComponent];

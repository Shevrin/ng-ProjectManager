import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import {DataSendComponent} from "./components/data-send/data-send.component";
import {CartComponent} from "./components/project/cart/cart.component";
import {ListComponent} from "./components/project/list/list.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { ProjectsComponent } from './components/project/projects/projects.component';


@NgModule({
  declarations: [
    MainComponent,
    DataSendComponent,
    CartComponent,
    ListComponent,
    NavBarComponent,
    ProjectsComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PagesModule { }
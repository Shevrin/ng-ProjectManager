import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import {DataSendComponent} from "./components/data-send/data-send.component";
import { ProjectsComponent } from './components/project/projects/projects.component';
import {CardComponent} from "./components/project/card/card.component";
import {ListComponent} from "./components/project/list/list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainComponent,
    DataSendComponent,
    CardComponent,
    ListComponent,
    NavBarComponent,
    ProjectsComponent
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class PagesModule { }

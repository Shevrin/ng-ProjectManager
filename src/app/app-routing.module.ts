import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {DataSendComponent} from "./pages/components/data-send/data-send.component";
import {ProjectsComponent} from "./pages/components/project/projects/projects.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'data'},
  {path: 'data', component: DataSendComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectsComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

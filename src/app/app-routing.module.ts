import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DataSendComponent} from "./pages/components/data-send/data-send.component";
import {CardComponent} from "./pages/components/project/card/card.component";
import {ProjectsComponent} from "./pages/components/project/projects/projects.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'data'},
  {path: 'data', component: DataSendComponent},
  {path: 'projects', component: ProjectsComponent},
  {path:'', outlet: 'project', redirectTo: 'project', pathMatch: 'full',
    children: [
      { path: ':id', outlet: 'project', component: CardComponent },
    ],},
  {
    path: 'project', children: [
      { path: ':id', outlet: 'project', component: CardComponent },
    ],
  }
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

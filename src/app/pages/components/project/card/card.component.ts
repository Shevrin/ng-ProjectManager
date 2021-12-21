import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription, switchMap } from 'rxjs';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public idProject: string = '';
  public cardProject: Record<string, any> = {}
  private subs  : Subscription;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute ) {
    this.cardProject = this.projectsService.getCard(this.idProject)
    // this.idProject = this.route.snapshot.paramMap.get('id') || '1';
    // this.subs = route.params.subscribe(params=> this.idProject = params['id'])
    this.subs = route.paramMap.pipe(switchMap(params => params.getAll('id'))).subscribe(params => this.idProject = params)
		console.log(route);
		
  }

}

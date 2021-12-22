import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { ProjectsService } from 'src/app/pages/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  public idProject$: Observable<string | null> = of('');
	public projectsList: Array<Record<string, any>>;

  constructor(private route: ActivatedRoute, private projectService: ProjectsService) {
    this.idProject$ = this.route.paramMap.pipe(map(param => param.get('id')));
		this.projectsList = this.projectService.getList();
  }
}
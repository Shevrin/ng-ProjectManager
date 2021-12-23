import { Component, Input } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {ProjectsService} from "src/app/pages/services/projects.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
public projectsList$: Observable<Array<any>> = of([])

constructor(public projectsService: ProjectsService )	{
	this.projectsList$ = this.projectsService.project$.pipe(map(project => project.map(item => ({
			id: item.id,
      subject: item.subject,
      createdBy: item.createdBy,
      startDate: item.startDate,
      endDate: item.endDate
	}) )))
}
}

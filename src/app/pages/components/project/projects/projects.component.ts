import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  public idProject$: Observable<string | null> = of('');

  constructor(private route: ActivatedRoute) {
    this.idProject$ = this.route.paramMap.pipe(map(param => param.get('id')));
  }
}

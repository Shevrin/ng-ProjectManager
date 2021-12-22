import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
@Input() public projectsList: Array<any> = []
	
}

import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public projectsList: Array<any> = []
  constructor(private projectService: ProjectsService) {
   this.projectsList = this.projectService.getList()
    console.log(this.projectService.getList());
  }

  ngOnInit(): void {
  }

}

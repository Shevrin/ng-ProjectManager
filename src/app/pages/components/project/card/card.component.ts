import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public idProject: string = '';
  public cardProject: Record<string, any> = {}

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
    this.idProject = this.route.snapshot.paramMap.get('id') || '1';
    this.cardProject = this.projectsService.getCard(this.idProject)


  }

  ngOnInit(): void {
    console.log(this.cardProject);
  }

}

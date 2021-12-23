import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/pages/services/projects.service';

@Component({
  selector: 'app-data-send',
  templateUrl: './data-send.component.html',
  styleUrls: ['./data-send.component.css']
})
export class DataSendComponent {
	public error: string = '';
  public data:string = ''
 
  constructor(private projectsService: ProjectsService) { }

  toSave(){
    this.error = this.projectsService.toSave(this.data);
    this.data = '';
  }
}

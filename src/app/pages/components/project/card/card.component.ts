import {Component, Input, OnChanges} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
 @Input() idProject: string | null = '';
  public error: string = '';
  public cardProject: Record<string, any> | null = null;
	public subject: string = '';
	public startDate: string = '';
	public endDate: string = '';
	public createdBy: string = '';
	public description: string = '';

public sub: string = '';
public start: string = '';
public end: string = '';
public des: string = '';

public newData: Record<string, any> = {}
add(){
console.log('endDate',this.endDate);
console.log('startDate',this.startDate);
}
public addChanges(event: any){
console.log(event.target.value);
// console.log(event);
this.endDate = event.target.value
}

  constructor(private projectsService: ProjectsService ) {
   		  }

 public ngOnChanges(): void {
	this.cardProject = this.projectsService.getCard(this.idProject as string);
	if (this.cardProject) {
	this.startDate = this.cardProject['startDate']
	this.endDate = this.cardProject['endDate']
	this.createdBy = this.cardProject['createdBy']
	this.subject = this.cardProject['subject']
	this.description = this.cardProject['description']
	}
    if (!this.cardProject) {
      this.error = 'Такой проект не найден';
    }
  }

}

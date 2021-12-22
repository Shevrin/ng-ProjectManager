import {Component, Input, OnChanges} from '@angular/core';
import {ProjectsService} from "src/app/pages/services/projects.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
 @Input() idProject: string | null = '';

  public id: string = '';
  public error: any = '';
  public cardProject: Record<string, any> | null = null;
	public subject: string = '';
	public startDate: string = '';
	public endDate: string = '';
	public createdBy: string = '';
	public description: string = '';

public newData: Record<string, any> = {}


add(){

	if (this.cardProject) {
	this.cardProject["subject"] = this.subject
	this.cardProject["startDate"] = this.startDate
	this.cardProject["endDate"] = this.endDate
	this.cardProject["createdBy"] = this.createdBy
	this.cardProject["description"] = this.description
	this.projectsService.saveChanges(this.id, this.cardProject)
	}

}
public changeDescription (event: any): void{
this.description = event.target.value
console.log(event)

}
public changeSubject (event: any): void {
this.subject = event.target.value
}
public changeDateStart (event: any): void {
	const dateArr: Array<number> = event.target.value.split('.');
	let newDate: string = new Date(dateArr[2], dateArr[1] -1 ,dateArr[0]).toString()
	this.startDate = newDate
}
public changeDateEnd (event: any): void {
	const dateArr: Array<number> = event.target.value.split('.');
	let newDate: string = new Date(dateArr[2], dateArr[1] -1 ,dateArr[0]).toString()
	this.endDate = newDate
}
public changeAuthor (event: any): void {
this.createdBy = event.target.value
}


  constructor(private projectsService: ProjectsService ) { }

 public ngOnChanges(): void {
	this.cardProject = this.projectsService.getCard(this.idProject as string);
	if (this.cardProject) {
	this.id = this.cardProject['id']
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

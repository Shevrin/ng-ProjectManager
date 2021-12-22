import {Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
 @Input() idProject: string | null = '';

// @ViewChild('subject')	subj!: ElementRef;
// @ViewChild ('startDate') start! : ElementRef ;
// @ViewChild ('endDate') end!: ElementRef ;
// @ViewChild ('createdBy') author!: ElementRef ;
// @ViewChild ('description') descr!: ElementRef ;

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
	// console.log(this.projectsService.getProjects())
	// console.log(this.cardProject)
	if (this.cardProject) {
	this.cardProject["subject"] = this.subject
	this.cardProject["startDate"] = this.startDate
	this.cardProject["endDate"] = this.endDate
	this.cardProject["createdBy"] = this.createdBy
	this.cardProject["description"] = this.description
	this.projectsService.saveChanges(this.id, this.cardProject)
	}
// console.log(this.description)
// console.log(this.createdBy)
// console.log(this.subject)
// console.log(this.endDate)
// console.log(this.startDate)
// 	console.log(this.cardProject)

}
public changeDescription (event: any): void{
this.description = event.target.value
console.log(event)

}
public changeSubject (event: any): void {
this.subject = event.target.value
}
public changeDateStart (event: any): void {
this.startDate = event.target.value
}
public changeDateEnd (event: any): void {
this.endDate = event.target.value
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

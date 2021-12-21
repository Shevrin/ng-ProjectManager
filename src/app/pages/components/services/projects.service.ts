import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public getProjects(): Array<any> {
    return JSON.parse(localStorage.getItem('Projects') as string)['Projects'];
  }
  public getList(): Array<Record<string, any>> {
    return this.getProjects().map(item => ({
      id: item.id,
      subject: item.subject,
      createdBy: item.createdBy,
      startDate: item.startDate,
      endDate: item.endDate
    }))

  }

  public getCard(id: string): Record<string, any> {
    return this.getProjects().find(item => item.id === id && {
      subject: item.subject,
      createdBy: item.createdBy,
      startDate: item.startDate,
      endDate: item.endDate,
      description: item.description
    })
  }

	public saveChanges(){
		
	}

  constructor() {
  }
}

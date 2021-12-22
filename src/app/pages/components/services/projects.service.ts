import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

public Projects$: Observable <Array<any>> = of(JSON.parse(localStorage.getItem('Projects') as string)['Projects']);


  public getProjects(): Array<any> {
	  return JSON.parse(localStorage.getItem('Projects') as string)['Projects'];
  }
  public getList(): Array<Record<string, any>> {
 this.Projects$.pipe(map(item => ({
      id: item.id,
      subject: item.subject,
      createdBy: item.createdBy,
      startDate: item.startDate,
      endDate: item.endDate
    }))
    // return this.getProjects().map(item => ({
    //   id: item.id,
    //   subject: item.subject,
    //   createdBy: item.createdBy,
    //   startDate: item.startDate,
    //   endDate: item.endDate
    // }))

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

	public saveChanges(id: string, elem: Record<string, any>){
		console.log(this.getProjects());
		let oldArr = this.getProjects()
		
		
		let newArr: Array<Record<string, any>> = oldArr.map(item => {
			if (item.id === id ) {
					 item = elem
		}
			return item
		}
			)
			console.log(newArr);
			let newData: Record<string, any> = {"Projects": []}
			newData['Projects'] = newArr
		localStorage.setItem('Projects', JSON.stringify(newData) )

	}

  constructor() {
  }
}

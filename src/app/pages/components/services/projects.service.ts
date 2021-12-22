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

	public saveChanges(id: any, elem: Record<string, any>){
		console.log(this.getProjects());
		this.getProjects().forEach(item => {console.log(item.id)
		if (item.id === id) {
			
		}
		console.log(id)}
		)
		
		
		let newArr = this.getProjects().filter(item => {
			// if (item.id === !id ) {
			item.id !== id 
				// console.log(item.id);
				// console.log('item',item);
				// console.log('elem',elem);
				// // item = elem
				// console.log(item.id);
				// console.log('item',item);
				// console.log('elem',elem);
				// }
				
			}
			)
			console.log(newArr);
			
			let newData: Record<string, any> = {"Projects": []}
			console.log(newData);
			
			newData['Projects'] = newArr
			console.log(newData);
			
		// changeElem = elem
		
		// localStorage.setItem('Projects', JSON.stringify(this.getProjects()) )
	}

  constructor() {
  }
}

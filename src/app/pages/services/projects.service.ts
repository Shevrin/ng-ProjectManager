import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public listSubject: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.getList());
  public list$: Observable<Array<any>> = this.listSubject.asObservable();

  public projectSubject: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.getProjects());
  public project$: Observable<Array<any>> = this.projectSubject.asObservable();
  
	public getProjects(): Array<any> {
		try {
			JSON.parse(localStorage.getItem('Projects') as string)
		} 
		catch(e: any) {
			console.log(e);
			return []
		}
	  return JSON.parse(localStorage.getItem('Projects') as string)['Projects'];
  }

	public get list(): Array<any> {
    return this.listSubject.value;
  }

  public set list(list: Array<Record<string, any>> ) {
    this.listSubject.next(list)
  }

	 public get projects(): Array<any> {
    return this.projectSubject.value;
  }

  public set projects(projects: Array<Record<string, any>> ) {
    this.projectSubject.next(projects)
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

	public toSave(data: string): string {
		try {
			JSON.parse(data)
		} catch(e: any) {
			return 'Неверный JSON'
		}
    localStorage.setItem('Projects', data )
		this.projects = this.getProjects();
		return '';
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
		let oldArr = this.getProjects()
		let newArr: Array<Record<string, any>> = oldArr.map(item => {
			if (item.id === id ) {
					 item = elem
				}
			return item
			})
			let newData: Record<string, any> = {"Projects": []}
			newData['Projects'] = newArr

		localStorage.setItem('Projects', JSON.stringify(newData) )
		this.projects = this.getProjects();
	}
}

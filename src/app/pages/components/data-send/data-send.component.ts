import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-send',
  templateUrl: './data-send.component.html',
  styleUrls: ['./data-send.component.css']
})
export class DataSendComponent implements OnInit {
  data:string = ''
   constructor() { }

  toSave(){
localStorage.setItem('Projects', this.data )
    this.data = ''
  }

  ngOnInit(): void {
  }

}

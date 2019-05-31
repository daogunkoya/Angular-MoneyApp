import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  links:Array<{name:string,url:string,image:string}>
  constructor() { }

  ngOnInit() {
    this.links = [
      {name:'Members', url:'users',image:'users'},
      {name:'Senders', url:'senders',image:'senders'}, 
      {name:'Receivers', url:'receivers',image:'receivers'}, 
      {name:'Transactions', url:'transactions',image:'briefcase'},
      {name:'Send Money', url:'send',image:'send'},
      {name:'Currency', url:'currencies',image:'briefcase'},
      {name:'Commissions', url:'commissions',image:'briefcase'},
      {name:'Payments', url:'payments',image:'payments'},
      {name:'Outstandings', url:'outstandings',image:'briefcase'},
      {name:'Rates', url:'rates',image:'unlock-alt'},
      {name:'Banks', url:'banks',image:'instuition'},
      {name:'Setting', url:'settings',image:'lock'},
      {name:'Turnovers', url:'turnovers',image:'briefcase'}
    ]
  }

}

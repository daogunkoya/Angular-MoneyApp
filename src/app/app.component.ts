import { Component, OnInit } from '@angular/core';
import {initializeApp,auth} from 'firebase/app'
import { api_key,auth_Domain } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title:string = 'MoneyApp-Angular-Node';
  loadedFeature:string = "home";


  constructor() { }

  ngOnInit() {
    initializeApp( 
      {
        apiKey: api_key,
      authDomain: auth_Domain})
  }

  onNavigate(loadedFeature:string){
    this.loadedFeature = loadedFeature
  }

}

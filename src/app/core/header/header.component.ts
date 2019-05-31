import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>()
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSelect(feature:string){
 this.featureSelected.emit(feature)
  }

  logout(){
    return this.authService.signout()
  }
  

}

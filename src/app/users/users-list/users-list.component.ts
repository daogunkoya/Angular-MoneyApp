import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as userActions from '../store/user.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input('users')users:User;
  filterString:string;
  usersListState:Observable<{usersList:User[]}>

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.FetchUsers())
    this.usersListState = this.store.select('users')
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {Sender} from '../sender.model'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as senderActions from '../store/sender.actions'


@Component({
  selector: 'app-senders-list',
  templateUrl: './senders-list.component.html',
  styleUrls: ['./senders-list.component.css']
})
export class SendersListComponent implements OnInit {
  @Input('senders') senders: Sender []
  filterString:string;
  senderListState:Observable<{senderList:Sender[]}>
  
  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new senderActions.FetchSenders())
    this.senderListState = this.store.select('senders')
     
  }

}

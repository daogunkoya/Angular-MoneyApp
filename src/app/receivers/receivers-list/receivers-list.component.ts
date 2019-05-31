import { Component, OnInit } from '@angular/core';
import {Receiver} from '../receiver.model'
import {ReceiverService} from '../receiver.service'
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import { Observable } from 'rxjs';
import * as ReceiverActions from '../store/receiver.actions'

@Component({
  selector: 'app-receivers-list',
  templateUrl: './receivers-list.component.html',
  styleUrls: ['./receivers-list.component.css']
})
export class ReceiversListComponent implements OnInit {

receivers:Receiver [];
filterString:string;  
receiversListState:Observable<{receiverList:Receiver[]}>

  constructor(private receiverService:ReceiverService,
      private store:Store<fromApp.AppState>) { }

  ngOnInit() {
   // this.receivers = this.receiverService.getReceivers()
   this.store.dispatch(new ReceiverActions.FetchReceivers() )
    this.receiversListState = this.store.select('receivers')
  }

}

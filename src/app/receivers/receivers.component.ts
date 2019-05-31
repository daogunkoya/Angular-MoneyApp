import { Component, OnInit,Input } from '@angular/core';
import {Receiver} from './receiver.model'
import {ReceiverService} from './receiver.service'
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.css']
})
export class ReceiversComponent implements OnInit {
@Input('receivers') receivers:Receiver []
  receiversListState:Observable<{receiverList:Receiver[]}>

  constructor(private receiverService:ReceiverService,
                private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    //this.receivers = this.receiverService.getReceivers()
    this.receiversListState = this.store.select('receivers')
  }

}

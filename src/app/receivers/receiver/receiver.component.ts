import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {ReceiverService} from '../receiver.service'
import {Receiver} from '../receiver.model'
import {CanComponentDeactivate} from '../../shared/can-deactivate-guard.service'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit,CanComponentDeactivate {
  @ViewChild('f') formValue:NgForm
  receiver:Receiver;
  allowEdit = false;
  changesSaved = false;
  fname = "";
  lname= "";
  phone= "";
  account_number= "";
  constructor(private route:ActivatedRoute,
      private router:Router,
      private receiverService:ReceiverService) { }

  ngOnInit() {
    if( this.route.snapshot.params['id']){
        this.route.params.subscribe((param:Params) => {
            this.receiver = this.receiverService.getReceiver(+param['id'])
            console.log('receiver=',this.receiver)
            this.fname = this.receiver.fname;
            this.lname = this.receiver.lname;
            this.phone = this.receiver.phone;
            this.account_number = this.receiver.account_number;
        })
    }
  }

  canDeactivate():Observable<boolean>|Promise<boolean> |boolean{
   
    if ((this.fname !== this.receiver.fname || this.receiver.lname !== this.lname) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  onSubmit(fValues:NgForm){
    let nValues = fValues.value

}

}


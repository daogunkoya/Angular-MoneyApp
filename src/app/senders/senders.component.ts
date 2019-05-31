import { Component, OnInit, Input } from '@angular/core';
import {Sender} from './sender.model'
import {SenderService} from './sender.service'

@Component({
  selector: 'app-senders',
  templateUrl: './senders.component.html',
  styleUrls: ['./senders.component.css']
})
export class SendersComponent implements OnInit {
@Input('senders') senders:Sender []
  constructor(private senderService:SenderService) { }

  ngOnInit() {
    this.senders = this.senderService.getSenders()
  }

}

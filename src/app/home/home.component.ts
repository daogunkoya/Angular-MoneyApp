import { Component, OnInit } from '@angular/core';
import {Transaction} from '../transactions/transaction.model'
import {User} from '../users/user.model'
import {Sender} from '../senders/sender.model'
import {Receiver} from '../receivers/receiver.model'
import {TransactionsService} from '../transactions/transactions.service'
import {UsersService} from '../users/users.service'
import {SenderService} from '../senders/sender.service'
import {ReceiverService} from '../receivers/receiver.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actions:boolean = false
  transactions:Transaction[]; 
  users:User[];
  senders:Sender[];
  receivers:Receiver[];
  trans_fields:string[] = ['No', 'Created_at',
                            'Agent','Tcode',
                            'Sender','Receiver',
                            'Local Pay', 'C_B',
                            'Total','Amount','Status'];

  constructor(private usersService:UsersService,
          private transactionService:TransactionsService,
          private senderService:SenderService,
          private receiverService:ReceiverService) { }

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
    this.users = this.usersService.getUsers();
    this.senders = this.senderService.getSenders();
    this.receivers = this.receiverService.getReceivers()
  }

}

import { Component, OnInit, Input} from '@angular/core';
import {Transaction} from './transaction.model'
import {TransactionsService} from './transactions.service'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  @Input('actions') admin:boolean
  @Input('transactionsResult') transactions:Transaction []
  @Input ('fields') trans_fields: string [] =  
                                    ['No', 'Created_at',
                                    'Agent','Tcode',
                                    'Sender','Receiver',
                                    'Local Pay', 'C_B',
                                    'Total','Amount','Status','Actions'];
  constructor(private transactionsService:TransactionsService) { }

  ngOnInit() {
    this.admin = true
      this.transactions = this.transactionsService.getTransactions()
  }

}

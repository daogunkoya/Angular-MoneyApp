import {Transaction} from './transaction.model'
export class TransactionsService{
    private transactions:Transaction [] = [
        new Transaction(1,'Asdes','7656789','agent', 1, 2,
            2, 400,20, 10,340, 1,'commission',0,0,'All well',
          'pending','12/01/2019'),
        new Transaction(2,'uytyui','345','agent', 1, 2,
          2, 400,20, 10,340, 1,'commission',0,0,'All well',
        'pending','12/02/2019'),
        new Transaction(3,'dfsss','8789','agent', 1, 2,
        2, 400,20, 10,340, 1,'commission',0,0,'All well',
      'pending','12/03/2019'),
      new Transaction(4,'dfsss','8789','agent', 1, 2,
        2, 400,20, 10,340, 1,'commission',0,0,'All well',
      'pending','07/01/2019')
    ];

    getTransactions(){
        return this.transactions.slice()
    }

    getTransaction(id:number){
      return this.transactions.slice().find(transaction=>transaction.id ==id)
  }
}
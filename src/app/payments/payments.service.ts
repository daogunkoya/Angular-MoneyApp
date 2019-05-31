import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Payment } from './Payment.model';


@Injectable()
export class paymentService {
  paymentsChanged = new Subject<Payment[]>();
  private ref:string;
    private amount:number;
    private  fore:string;
    private mode:string;
    private user_type:string;
    private user_id:number;
 
  private payments: Payment[] = [
    new Payment(1,'as345',300,'subscription','cash','agent',1),
    new Payment(2,'as345',300,'transaction','cash','admin',1),
    new Payment(3,'as345',500,'subscription','card','agent',1),
    new Payment(4,'as345',800,'outstanding','online','agent',1),
    new Payment(5,'as345',900,'debt','cash','customer',1),
    new Payment(6,'as345',4000,'subscription','cash','agent',1),
   
  ];

  constructor() {}

  getPayments() {
    return this.payments.slice();
  }

  getPayment(index: number) {
    return this.payments[index];
  }


  addPayment(Payment: Payment) {
    this.payments.push(Payment);
    this.paymentsChanged.next(this.payments.slice());
  }

  updatePayment(index: number, newpayment: Payment) {
    this.payments[index] = newpayment;
    this.paymentsChanged.next(this.payments.slice());
  }

  deletePayment(index: number) {
    this.payments.splice(index, 1);
    this.paymentsChanged.next(this.payments.slice());
  }
}

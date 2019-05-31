import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Outstanding } from './outstanding.model';


@Injectable()
export class outstandingService {
  outstandingsChanged = new Subject<Outstanding[]>();
 
  private outstandings: Outstanding[] = [
    new Outstanding(1,11,1,100,10,0,1,2,1),
    new Outstanding(2,10,1,300,15,0,1,2,1),
    new Outstanding(3,12,1,900,6,0,1,2,1),
    new Outstanding(4,9,1,700,22,0,1,2,1),
    new Outstanding(5,3,1,900,20,0,1,2,1),
  ];

  constructor() {}

  getOutstandings() {
    return this.outstandings.slice();
  }

  getOutstanding(index: number) {
    return this.outstandings[index];
  }


  addOutstanding(Outstanding: Outstanding) {
    this.outstandings.push(Outstanding);
    this.outstandingsChanged.next(this.outstandings.slice());
  }

  updateoutstanding(index: number, newoutstanding: Outstanding) {
    this.outstandings[index] = newoutstanding;
    this.outstandingsChanged.next(this.outstandings.slice());
  }

  deleteoutstanding(index: number) {
    this.outstandings.splice(index, 1);
    this.outstandingsChanged.next(this.outstandings.slice());
  }
}

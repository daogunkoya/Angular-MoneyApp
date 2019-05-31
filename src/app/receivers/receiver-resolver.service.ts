import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Receiver} from './receiver.model'
import { Injectable } from '@angular/core';

import { ReceiverService } from './receiver.service';

// interface receiver {
//   id: number;
//   name: string;
//   status: string;
// }

@Injectable()
export class ReceiverResolver implements Resolve<Receiver> {
  constructor(private receiverService: ReceiverService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Receiver> | Promise<Receiver> | Receiver {
    return this.receiverService.getReceiver(+route.params['id']);
  }
}

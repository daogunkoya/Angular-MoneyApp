import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { RatesService } from './rates.service';

interface Rate {
    id:number;
    rate:number;
    user_id:number;
    currency_id:number;
    bou_rate:number;
    sold_rate:number;
    created_at:string;
    updated_at:string;
}

@Injectable()
export class RateResolver implements Resolve<Rate> {
  constructor(private RatesService: RatesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rate> | Promise<Rate> | Rate {
    return this.RatesService.getRate(+route.params['id']);
  }
}

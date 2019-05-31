import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { CommissionsService } from './commissions.service';

interface Commission {
    id:number;
    start_at:number;
    end_at:number;
    value:number;
    agent_quota:number;
    user_id:number;
    currency_id:number;
    created_at:string;
    updated_at:string
}

@Injectable()
export class CommissionResolver implements Resolve<Commission> {
  constructor(private commissionsService: CommissionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Commission> | Promise<Commission> | Commission {
    return this.commissionsService.getCommission(+route.params['id']);
  }
}

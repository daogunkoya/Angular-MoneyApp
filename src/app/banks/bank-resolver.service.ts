import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BanksService } from './banks.service';

interface Bank {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class BankResolver implements Resolve<Bank> {
  constructor(private banksService: BanksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bank> | Promise<Bank> | Bank {
    return this.banksService.getBank(+route.params['id']);
  }
}

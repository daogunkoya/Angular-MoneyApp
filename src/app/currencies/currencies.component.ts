import { Component, OnInit } from '@angular/core';
import {Currency} from './currency.model'
import {CurrenciesService} from './currencies.service'

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies:Currency [];

  constructor(private currenciesService: CurrenciesService) { }

  ngOnInit() {
      this.currencies = this.currenciesService.getCurrencies()
  }

}

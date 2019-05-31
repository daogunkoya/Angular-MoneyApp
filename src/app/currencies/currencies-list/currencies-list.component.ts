import { Component, OnInit, Input } from '@angular/core';
import {Currency} from '../currency.model'

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements OnInit {
  @Input('currencies') currencies:Currency [];
  constructor() { }

  ngOnInit() {
  }

}

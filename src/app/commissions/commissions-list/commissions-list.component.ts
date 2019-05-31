import { Component, OnInit } from '@angular/core';
import {CommissionsService} from '../commissions.service'
import {Commission} from '../commission.model'

@Component({
  selector: 'app-commissions-list',
  templateUrl: './commissions-list.component.html',
  styleUrls: ['./commissions-list.component.css']
})
export class CommissionsListComponent implements OnInit {
  commissions:Commission [];
  constructor(private commissionService:CommissionsService) { }

  ngOnInit() {
    this.commissions = this.commissionService.getCommissions();
  }

}

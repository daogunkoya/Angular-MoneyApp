import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {
    commissionForm:FormGroup;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.commissionForm = new FormGroup({
      'currency_id':new FormControl('currency id',[Validators.required]),
      'user_id':new FormControl('user id',[Validators.required]),
      'start_at':new FormControl('Start At',[Validators.required]),
      'end_at':new FormControl('End At',[Validators.required]),
      'value':new FormControl('value',[Validators.required]),
      'agent_quota':new FormControl('agent Quota',[Validators.required]),
    })

    if(this.route.snapshot.params['id']){
      console.log('param=',this.route.snapshot.params['id'])
      this.route.data.subscribe((data:Data)=>{
              this.commissionForm.patchValue({
                'start_at':data.commission.start_at,
                'end_at':data.commission.end_at,
                'value':data.commission.value,
                'agent_quota':data.commission.agent_quota,
                'currency_id':data.commission.currency_id,
                'user_id':data.commission.user_id,
              })
      })
    }
  }

  onSubmit(){
    console.log('commissionForm', this.commissionForm)
     
  }

}

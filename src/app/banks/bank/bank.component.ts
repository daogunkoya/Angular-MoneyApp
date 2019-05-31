
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {BanksService} from '../banks.service'
import {Bank} from '../bank.model'
import { Data, ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  newstatus:string = "showman"
 bankForm:FormGroup
    bank:Bank;

      constructor(
        private bankService:BanksService,
        private route:ActivatedRoute,
        private router:Router) {
      }
        ngOnInit() {
          
          this.bankForm = new FormGroup({
           'bankData' :new FormGroup({
            'name':new FormControl(null,[Validators.required]),
            'status':new FormControl(null,[Validators.required]),
           })
          })

        if( this.route.snapshot.params['id']){
           this.route.params.subscribe((params:Params) =>{
              let bankSelected = this.bankService.getBank(+params['id'])
                console.log('bank',bankSelected)
                    if(bankSelected){
                      this.bankForm.setValue({
                        bankData:
                            {name:bankSelected.name,
                            status:bankSelected.status}
                      })
                    }
             // })
           })
          
        

         }
          
    }
    submit(){
      console.log('form',this.bankForm.value)
        this.route.params.subscribe((params:Params)=>{
          const bk = {id:null,
                      name:this.bankForm.value.bankData.name ,
                      status:this.bankForm.value.bankData.status,
                      created_at:null,
                    updated_at:null};
            if(!params['id']){
              this.bankService.addBank(bk)
            }else{
              this.bankService.updateBank(+params['id'],bk)
            }
            this.bankForm.reset()
        })
    }

   
  }



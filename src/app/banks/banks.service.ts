import {Bank} from './bank.model'
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import {uri} from '../utility.service'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BanksService implements OnInit{
    bankChange = new EventEmitter<Bank[]>();
    //bankChanged = new Subject<Bank[]>();
    banks:Bank [] = []

        constructor(private http:HttpClient){
           this.fetchBanks();
        }

        ngOnInit(){
            
        }
    getBanks(){
        return this.banks.slice();
    }

    fetchBanks(){
        this.http.get<Bank[]>(uri+'banks.json')
        
        .subscribe((banks:Bank[])=>{
            console.log('banks new',banks)
             this.banks = banks?banks:[]
            this.bankChange.emit(this.banks)
     })
      

   

    }

   storeBank(){
        this.http.put<Bank[]>(uri+'banks.json',this.banks.slice())
        
        .subscribe((banks:Bank[])=>{
            console.log('banks new',banks)
            this.banks = banks?banks:[]
            this.bankChange.emit(this.banks)
        })
   }

     getBank(id){
     
            return this.banks.slice().find((bank,i) =>i ===id );
           //const result = <any>await this.bankChange.subscribe()
           //console.log('banks await', result)
     
    }

    addBank(newBank:Bank){
       const updateBank = this.banks.slice()
         newBank['id'] = updateBank.length + 1
        updateBank.push(newBank)
        this.banks = updateBank.slice()
        this.bankChange.emit(updateBank.slice())
        this.storeBank();
        
    }
    updateBank(id,bank:{name:string,status:string}){
        //const findBank = this.banks.find(b=>b.id === id)
        const findBank = this.banks.map((bankElement:Bank)=>{
            if(bankElement.id ===id){
                bankElement['name'] = bank.name;
                bankElement['status'] = bank.status;
                return bankElement
            }
        })
        // if(findBank){
        //     findBank.name = bank.name;
        //     findBank.status  = bank.status
            
        // }
        this.bankChange.next(this.banks)
        console.log(this.banks)
    }

    deleteBank(id){
        console.log('to delete',id)
            this.banks.splice(id,1)
        // this.bankChanged.next(this.banks)
         this.bankChange.next(this.banks)
        this.storeBank()
            
       
    }
}


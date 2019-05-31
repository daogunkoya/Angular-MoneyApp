import {Commission} from './Commission.model'
import { EventEmitter } from 'events';
export class CommissionsService{
    //CommissionChange = new EventEmitter
    
    Commissions:Commission [] = [
       new Commission (1,1,100,5,50,1,1,'20/02/2019','6/02/2018'),
       new Commission (2,100,200,5,50,1,1,'20/02/2019','6/02/2018'),
       new Commission (3,200,300,5,50,1,1,'20/02/2019','6/02/2018'),
       new Commission (4,300,400,5,50,1,1,'20/02/2019','6/02/2018'),
       new Commission (5,400,500,5,50,1,1,'20/02/2019','6/02/2018'),
       new Commission (6,5,600,5,50,1,1,'20/02/2019','6/02/2018'),
    ];

    getCommissions(){
        return this.Commissions;
    }

    getCommission(id){
        return this.Commissions.find(Commission => Commission.id ===id );
       
    }

    addCommission(newCommission:Commission){
       const bks = this.Commissions.slice()
       newCommission['id'] = bks.length + 1
       bks.push(newCommission)
        this.Commissions = bks.slice()
        //this.CommissionChange.emit(this.Commissions)
        console.log(this.Commissions)
    }
    updateCommission(id,Commission:{name:string,status:string}){
        const findCommission = this.Commissions.find(b=>b.id === id)
        if(findCommission){
            // findCommission.name = Commission.name;
            // findCommission.status  = Commission.status
        }
        console.log(this.Commissions)
    }

    deleteCommission(id){
        return this.Commissions.splice(id,1 );
       
    }
}


export class Commission{
   
    id:number;
     start_at:number;
     end_at:number;
     value:number;
     agent_quota:number;
     user_id:number;
     currency_id:number;
     created_at:string;
     updated_at:string;

     constructor(id:number,start_at:number,end_at:number,value:number,
         agent_quota:number,user_id:number,currency_id:number,
         created_at:string,updated_at:string)
         {
         this.id = id;
         this.start_at = start_at;
         this.end_at = end_at;
         this.value = value;
         this.agent_quota = agent_quota;
         this.user_id = user_id;
         currency_id = currency_id
         this.created_at = created_at;
         this.updated_at = updated_at;
     }
 }
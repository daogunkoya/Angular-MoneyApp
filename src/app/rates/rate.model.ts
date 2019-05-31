export class Rate{
   id:number;
    rate:number;
    user_id:number;
    currency_id:number;
    bou_rate:number;
    sold_rate:number;
    created_at:string;
    updated_at:string;
    constructor(id:number,rate:number,user_id:number,currency_id:number,
        bou_rate:number,sold_rate:number,created_at:string,updated_at:string){
        this.id = id;
        this.rate = rate
        this.user_id = user_id;
        this.currency_id = currency_id;
        this.bou_rate = bou_rate;
        this.sold_rate = sold_rate;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
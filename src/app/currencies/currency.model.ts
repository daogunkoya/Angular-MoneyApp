export class Currency{
    id:number;
    user_id: number;
    origin: string;
    origin_symbol: string;
    destination: string;
    destination_symbol: string;
    code: string;
    income_category:string;
    status:number;
    created_at:string;
    updated_at:string;

    constructor(id:number,user_id: number, origin: string,
        origin_symbol: string, destination: string,
        destination_symbol: string,code: string,income_category:string,
        status:number,created_at:string,updated_at:string){
        
        this.id = id ;
        this.user_id = user_id ;
        this.origin = origin ;
        this.origin_symbol = origin_symbol ;
        this.destination = destination ;
        this.destination_symbol = destination_symbol ;
        this.code = code ;
        this.income_category = income_category;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;

    }
}
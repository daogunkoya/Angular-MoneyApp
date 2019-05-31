export class Payment{
    private id:number;
    private ref:string;
    private amount:number;
    private  fore:string;
    private mode:string;
    private user_type:string;
    private user_id:number;


    constructor(id:number,
        ref:string,
                 amount:number,
                  fore:string,
                 mode:string,
                 user_type:string,
                 user_id:number){

                            this.id = id;
                            this.ref = ref;
                            this.amount = amount;
                            this.fore = fore;
                            this.mode=mode;
                            this.user_type= user_type;
                            this.user_id = user_id;
        
                        }
}
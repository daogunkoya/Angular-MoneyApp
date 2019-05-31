export class Transaction {
        public id:number;
        public receipt_number:string;
        public receiver_phone:string;
        public type:string;
        public user_id:number;
        public sender_id:number;
        public receiver_id:number;
        public amount:number;
        public commission:number;
        public agent_commission:number;
        public exchange_rate:number;
        public currency_id:number;
        public currency_income:string;
        public bou_rate:number;
        public sold_rate:number;
        public note:string;
        public status:string;
        public created_at:string;

         


    constructor( id:number,receipt_number:string,receiver_phone:string,
        type:string, user_id:number, sender_id:number,
        receiver_id:number, amount:number,commission:number,
        agent_commission:number,exchange_rate:number,
        currency_id:number,currency_income:string,
        bou_rate:number,sold_rate:number,note:string,
        status:string,created_at:string)
           
        {
            this.id = id;
            this.receipt_number  = receipt_number;
            this.receiver_phone= receiver_phone;
            this.type = type;
            this.user_id = user_id;
            this.sender_id = sender_id;
            this.receiver_id = receiver_id;
            this.amount = amount;
            this.commission = commission;
            this.agent_commission = agent_commission ;
            this.exchange_rate = exchange_rate;
            this.currency_id = currency_id;
            this.currency_income = currency_income;
            this.bou_rate = bou_rate;
            this.bou_rate = bou_rate;
            this.sold_rate = sold_rate;
            this.status = status;
            this.created_at = created_at;
        }
}
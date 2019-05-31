export class Receiver {
        public id:number
        public fname:string;
        public lname:string;
        public user_id:number;
        public sender_id:number;
        public phone:string;
        public bank:string;
        public transfer_type:string;
        public identity_type:string;
        public account_number:string;
        public created_at:string

 
        constructor( id:number,fname:string, lname:string,user_id:number,
            sender_id:number,phone:string,bank:string,
            transfer_type:string,identity_type:string,
            account_number:string,created_at:string)
           
        {
            this.id = id;
            this.fname = fname;
            this.lname = lname;
            this.user_id = user_id;
            this.sender_id = sender_id;
            this.phone = phone;
            this.bank = bank;
            this.transfer_type = transfer_type;
            this.identity_type = identity_type;
            this.account_number = account_number;
            this.created_at = created_at
        }
}
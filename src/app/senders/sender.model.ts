export class Sender {
        public id:number
        public user_id:number;
        public fname:string;
        public lname:string;
        public mname:string;
        public name:string;
        public email:string;
        public mobile:string;
        public phone:string;
        public dob:string;
        public address:string;
        public postcode:string;
        public title:string;
        public currency_id:number;
        public address_id:number;
        public photo_id:number;

       constructor(id:number,user_id:number,fname:string,
            lname:string,mname:string,name:string,
            email:string,mobile:string, phone:string,
            dob:string,address:string,postcode:string,
            title:string,currency_id:number,address_id:number,
            photo_id:number)
           
        {
            this.id = id
            this.user_id = user_id;
            this.fname = fname;
            this.lname = lname;
            this.mname = mname;
            this.name = name;
            this.email = email;
            this.mobile = mobile;
            this.phone = phone;
            this.dob = dob;
            this.address = address;
            this.postcode = postcode;
            this.title = title;
            this.currency_id = currency_id;
            this.address_id = address_id;
            this.photo_id = photo_id;
        }
}
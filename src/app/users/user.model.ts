export class User {
        public id:number;
        public name:string;
        public email:string;
        public password:string;
        public fname:string;
        public lname:string;
        public phone:string;
        public mobile:string;
        public photo_id:number;
        public address_id:number;
        public currency_id:number;
        public is_active:number;
        public dob:string;
        public title:string;
        public mname:string;
        public credit:number;
        public type:string;

    constructor(id:number,title:string,name:string,
    fname:string,lname:string,mname:string,
    dob:string,currency_id:number,
    phone:string,mobile:string,
    email:string,password:string,
    type:string,credit:number,
    photo_id:number,address_id:number,
    is_active:number,created_at:string)
            {
            this.id = id;
            this.name = name;
            this.email = email;
            this.password = password;
            this.fname = fname;
            this.lname = lname;
            this.email = email;
            this.phone = phone;
            this.mobile = mobile;
            this.photo_id = photo_id;
            this.address_id = address_id;
            this.currency_id = currency_id;
            this.is_active = is_active;
            this.dob = dob;
            this.title = title;
            this.mname = mname;
            this.credit = credit;
            this.type = type
        }
}
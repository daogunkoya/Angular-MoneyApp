export class Outstanding{

        private id: number;
        private transaction_id: number;
        private user_id: number;
        private amount: number;
        private agent_commission: number;
        private manager_id: number;
        private admin_id: number;
        private transaction_paid : number;
        private commission_paid:number;

        constructor(id: number,
                    transaction_id: number,
                    user_id: number,
                    amount: number,
                    agent_commission: number,
                    manager_id: number,
                    admin_id: number,
                    transaction_paid : number,
                    commission_paid:number){

                this.id =transaction_id;
                this.transaction_id =transaction_id;
                this.user_id =user_id;
                this.amount =amount;
                this.agent_commission =agent_commission;
                this.manager_id =manager_id;
                this.admin_id = admin_id;
                this.transaction_paid  = transaction_paid;
                this.commission_paid = commission_paid;
        }
}
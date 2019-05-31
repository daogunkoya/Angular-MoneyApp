import {Receiver} from './receiver.model'
export class ReceiverService{
    private receivers:Receiver [] = [
    new Receiver(1,'Thomas','Gofe',1, 2,'0987678','Zenith',
        'bank','passport','9767890987','12/02/2014'),
    new Receiver(2,'Felix','Roke',1, 2,'0987678','Zenith',
        'bank','passport','9767890987','12/02/2016'),
    
     new Receiver(3,'Herma','Lo',1, 2,'0987678','Zenith',
        'bank','passport','9767890987','9/11/2016'),
     new Receiver(4,'dema','aswa',1, 2,'0987678','Zenith',
        'bank','passport','9767890987','12/12/2015'),
         
    ];

    getReceivers(){
        return this.receivers.slice()
    }
    getReceiver(id:number){
        return this.receivers.find(receiver => receiver.id === id)
    }
}
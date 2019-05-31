import {Sender} from './sender.model'
export class SenderService{
    private senders:Sender [] = [
    new Sender(1,1,'Freeke','Vae','Density','Tamos Gafad',
          'ds@yahoo.com','0987656', '87667','34/3/2012','22. red str',
          'e34 123', 'Mr',1,2, 3),
     new Sender(2,1,'Freeke','Vae','Density','Tamos Gafad',
          'ds@yahoo.com','0987656', '87667','34/3/2012','22. red str',
          'e34 123', 'Mr',1,2, 3),
     new Sender(3,1,'Freeke','Vae','Density','Tamos Gafad',
          'ds@yahoo.com','0987656', '87667','34/3/2012','22. red str',
          'e34 123', 'Mr',1,2, 3),
     new Sender(4,1,'Freeke','Vae','Density','Tamos Gafad',
          'ds@yahoo.com','0987656', '87667','34/3/2012','22. red str',
          'e34 123', 'Mr',1,2, 3)

         
    ];

    getSenders(){
        return this.senders.slice()
    }
}
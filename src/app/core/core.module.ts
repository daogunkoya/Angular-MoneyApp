import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing-module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LinkItemComponent } from './sidebar/link-item/link-item.component';
import { UsersService } from '../users/users.service';
import { TransactionsService } from '../transactions/transactions.service';
import { ReceiverService } from '../receivers/receiver.service';
import { SenderService } from '../senders/sender.service';
import { CurrenciesService } from '../currencies/currencies.service';
import { BanksService } from '../banks/banks.service';
import { BankResolver } from '../banks/bank-resolver.service';
import { RateResolver } from '../rates/rate-resolver.service';
import { CommissionResolver } from '../commissions/commission-resolver.service';
import { TransactionResolver } from '../transactions/transaction-resolver.service';
import { RatesService } from '../rates/rates.service';
import { CommissionsService } from '../commissions/commissions.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth-guard.service';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations:[
        HeaderComponent,
        SidebarComponent,
        LinkItemComponent,
        
    ],
    imports:[
        CommonModule,
        SharedModule,
        AppRoutingModule,
        
       
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        LinkItemComponent
    ],
    providers: [UsersService,
        TransactionsService,
        ReceiverService,
        SenderService,
        CurrenciesService,
        BanksService,
        BankResolver,
        RateResolver,
        CommissionResolver,
        TransactionResolver,
        RatesService,
        CommissionsService,
        AuthService,
        AuthGuard,
        CanDeactivateGuard],
})
export class CoreModule {}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http'
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import {AppRoutingModule} from './app-routing-module';
import { InputComponent } from './shared/input/input.component';





import { CommissionsModule } from './commissions/commissions.module';
import { OutstandingsModule } from './outstandings/outstandings.module';
import { PaymentsModule } from './payments/payments.module';
import { ReceiversModules } from './receivers/receivers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SendersModule } from './senders/senders.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { RatesModule } from './rates/rates.modue';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './store/app.reducers';
import {effects} from './store/app.effects'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    InputComponent, 
   ],

  imports: [
    AuthModule,
    RatesModule,
    CommissionsModule,
    OutstandingsModule,
    PaymentsModule,
    ReceiversModules,
    SendersModule,
    TransactionsModule,
    UsersModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoreModule,
    AppRoutingModule, 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

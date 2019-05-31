import {NgModule} from '@angular/core'
import {RouterModule, Routes, PreloadAllModules} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth-guard.service';
import {CanDeactivateGuard} from './shared/can-deactivate-guard.service'


const appRoutes: Routes = [
      {path:'', component:HomeComponent},
      {path:'currencies', loadChildren:'./currencies/currencies.module#CurrenciesModule'},
      {path:'banks', loadChildren:'./banks/banks.module#BanksModule'},
     
      {path:'not-found', component: PageNotFoundComponent},
      {path:'**', redirectTo: '/not-found'}
];
@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import { ExercicesComponent } from './exercices/exercices.component';
import { BalancesComponent } from './balances/balances.component';
import {CabinetsComponent} from "../cabinet/cabinets/cabinets.component";
import {CabinetsService} from "../cabinet/cabinets/cabinets.service";
import { BalanceComponent } from './balances/balance/balance.component';

const routes: Routes = [
    {
        path     : 'exercices',
        component: ExercicesComponent,
        // resolve  : {
        //     data: CabinetsService
        // }
    },
    {
        path     : 'balances',
        component: BalancesComponent,
        // resolve  : {
        //     data: CabinetsService
        // }
    },
];

@NgModule({
  declarations: [ExercicesComponent, BalancesComponent, BalanceComponent],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,
      SharedModule
  ]
})
export class ExerciceModule { }

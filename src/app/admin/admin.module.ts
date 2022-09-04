import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListViewComponent } from './admin-list-view/admin-list-view.component';
import {AccountModule} from "../account/account.module";
import {ACCOUNT_TYPE, AccountService} from "../account/service/account.service";



@NgModule({
  declarations: [
    AdminListViewComponent
  ],
  imports: [
    CommonModule,
    AccountModule
  ],
  providers: [
    AccountService,
    { provide: ACCOUNT_TYPE, useValue: "admin" }
  ]
})
export class AdminModule { }

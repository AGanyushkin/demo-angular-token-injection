import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListViewComponent } from './customer-list-view/customer-list-view.component';
import {AccountModule} from "../account/account.module";



@NgModule({
  declarations: [
    CustomerListViewComponent
  ],
  imports: [
      CommonModule,
      AccountModule
  ]
})
export class CustomerModule { }

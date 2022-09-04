import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListViewComponent } from './account-list-view/account-list-view.component';


@NgModule({
  declarations: [
    AccountListViewComponent
  ],
  exports: [
    AccountListViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule {
  constructor() {
  }
}

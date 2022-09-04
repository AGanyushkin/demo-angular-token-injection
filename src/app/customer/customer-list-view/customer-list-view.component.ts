import {Component, OnInit} from '@angular/core';
import {ACCOUNT_TYPE, AccountService} from "../../account/service/account.service";
import {Observable} from "rxjs";
import {Account} from "../../account/domain/Account";

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css'],
  providers: [
    { provide: ACCOUNT_TYPE, useValue: 'customer' },
    AccountService
  ]
})
export class CustomerListViewComponent implements OnInit {
  accounts$: Observable<Account[]> | null = null

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts$ = this.accountService.getListOfAccounts()
  }
}

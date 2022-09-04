import {Component, OnInit} from '@angular/core';
import {ACCOUNT_TYPE, AccountService} from "../../account/service/account.service";
import {Observable} from "rxjs";
import {Account} from "../../account/domain/Account";

@Component({
  selector: 'app-admin-list-view',
  templateUrl: './admin-list-view.component.html',
  styleUrls: ['./admin-list-view.component.css']
})
export class AdminListViewComponent implements OnInit {
  accounts$: Observable<Account[]> | null = null

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts$ = this.accountService.getListOfAccounts()
  }
}

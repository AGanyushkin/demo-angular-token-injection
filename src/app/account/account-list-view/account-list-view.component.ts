import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../domain/Account";

@Component({
  selector: 'app-account-list-view',
  templateUrl: './account-list-view.component.html',
  styleUrls: ['./account-list-view.component.css']
})
export class AccountListViewComponent implements OnInit {
  @Input() accounts: Account[] | null = null

  constructor() { }

  ngOnInit(): void {
  }

}

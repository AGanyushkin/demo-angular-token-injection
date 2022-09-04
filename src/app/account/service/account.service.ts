import {Account} from "../domain/Account";
import {Observable, of} from "rxjs";
import {Inject, Injectable, InjectionToken} from "@angular/core";

type AccountTypeType = 'customer' | 'admin';
type AccountPool = Record<'customer' | 'admin', Account[]>;
const DATA: AccountPool = {
  'customer': [
    {
      id: "customer-1",
      name: "Name_1"
    },
    {
      id: "customer-2",
      name: "Name_2"
    },
    {
      id: "customer-3",
      name: "Name_3"
    }
  ],
  'admin': [
    {
      id: "admin-id-1",
      name: "First Admin"
    },
    {
      id: "admin-id-2",
      name: "Second Admin"
    }
  ]
}

export const ACCOUNT_TYPE = new InjectionToken<AccountTypeType>('accountType');

@Injectable()
export class AccountService {
  constructor(@Inject(ACCOUNT_TYPE) private accountType: AccountTypeType) {
  }

  getListOfAccounts(): Observable<Account[]> {
    return of(DATA[this.accountType])
  }
}

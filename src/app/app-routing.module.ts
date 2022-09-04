import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminListViewComponent} from "./admin/admin-list-view/admin-list-view.component";
import {CustomerListViewComponent} from "./customer/customer-list-view/customer-list-view.component";

const routes: Routes = [
  {path: "admins", component: AdminListViewComponent},
  {path: "customers", component: CustomerListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

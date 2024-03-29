import { Component, ViewChild } from '@angular/core';
import { MasterService } from '../../_services/master.service';
import { Posts } from '../../../_model/posts';
import { Customer } from '../../../_model/Customer';
import { MaterialModule } from '../../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { deleteCustomer, loadCustomer } from '../../_store/Customer/Customer.Actions';
import { getCutomerList } from '../../_store/Customer/Customer.Selector';
import { Router, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private store: Store, private router: Router){}

  customerData!: Customer[];

  datasource: any;
  displayColums: string[] = ['code', 'name', 'email', 'phone', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.store.dispatch(loadCustomer());

    this.store.select(getCutomerList).subscribe((item) => {
      this.customerData = item;
      console.log(this.customerData);
      this.datasource = new MatTableDataSource(this.customerData);
    })
  }

  deletecustomer(code: string) {
    if (confirm("do you want to remove?")) {
      this.store.dispatch(deleteCustomer({ code: code }));
    }
  }

  editcustomer(code: string) {
    this.router.navigateByUrl('/customer/edit/'+code);
  }
}
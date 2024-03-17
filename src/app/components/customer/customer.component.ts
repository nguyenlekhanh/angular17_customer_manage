import { Component } from '@angular/core';
import { MasterService } from '../../_services/master.service';
import { Posts } from '../../../_model/posts';
import { Customer } from '../../../_model/Customer';
import { MaterialModule } from '../../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadCustomer } from '../../_store/Customer/Customer.Actions';
import { getCutomerList } from '../../_store/Customer/Customer.Selector';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private store: Store){}

  customerData!: Customer[];

  datasource: any;
  displayColumns: string[]=['code', 'name', 'email', 'password']

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
}
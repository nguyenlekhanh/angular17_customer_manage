import { Component } from '@angular/core';
import { MasterService } from '../../_services/master.service';
import { Posts } from '../../../_model/posts';
import { Customer } from '../../../_model/Customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private service: MasterService){}

  customerData!: Customer[];

  ngOnInit() {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.service.GetAllCustomer().subscribe((item) => {
      this.customerData = item;
      console.log(this.customerData);
    })
  }
}
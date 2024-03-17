import { Component } from '@angular/core';
import { MasterService } from '../../_services/master.service';
import { Posts } from '../../../_model/posts';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private service: MasterService){}

  postData!: Posts[];

  ngOnInit() {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.service.getAll().subscribe((item) => {
      this.postData = item;
      console.log(this.postData);
    })
  }
}
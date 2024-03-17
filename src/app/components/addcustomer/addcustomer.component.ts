import { Component } from '@angular/core';
import { MaterialModule } from '../../../_module/Material.Module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../_model/Customer';
import { Store } from '@ngrx/store';
import { addCustomer } from '../../_store/Customer/Customer.Actions';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [MaterialModule, RouterLink, ReactiveFormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css',
})
export class AddcustomerComponent {
  editcode = '';
  pagetitle = 'Add Customer';

  constructor(private builder: FormBuilder, private store: Store, private actroute: ActivatedRoute) {}

  myform = this.builder.group({
    code: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required),
  });

  Savecustomer() {
    if (this.myform.valid) {
      const _obj: Customer = {
        code: this.myform.value.code as string,
        name: this.myform.value.name as string,
        email: this.myform.value.email as string,
        phone: this.myform.value.phone as string,
      };
      console.log(_obj);
      this.store.dispatch(addCustomer({ inputdata: _obj }));
    }
  }
}

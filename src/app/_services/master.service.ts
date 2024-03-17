import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../_model/posts';
import { Customer } from '../../_model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }

  GetAllCustomer() {
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3QiLCJyb2xlIjoidXNlciIsIm5iZiI6MTcxMDY0MzM0NiwiZXhwIjoxNzEwNjQzNjQ2LCJpYXQiOjE3MTA2NDMzNDZ9.Fq-JI6MX90VWsw-6gkgTyHink-QmLZhbxmGRbCqxmc0

    return this.http.get<Customer[]>('https://localhost:7143/api/Customer/GetAll');
  }
}

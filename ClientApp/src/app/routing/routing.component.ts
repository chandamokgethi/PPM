import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  public roles: Acquisition[];
  public departments: Department[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Acquisition[]>('/api/Routing/GetRouting').subscribe((data: any[]) => {
      console.log(data);
      this.roles = data;
    });
    http.get<Department[]>('/api/Routing/GetDepartment').subscribe(result => {
      this.departments = result;
      console.log(result);
    }, error => console.error(error));
  }
  OnSubmit() {
    //this.http.put('/api/Routing/UpdateRecord').subscribe(result => {
    //  console.log(result);
    //});
  }
    OnCancel(){
      console.log();
    }

  ngOnInit() {
  }
}

interface Acquisition {
  acquisitionID: number;
  transactionID: string;
  paymentMethod: string;
  amount: number
  currency: string;
  transactionDate: Date;
  description: string;
  departmentID: number;
}

interface Department {
  id: number;
  name: string;
}


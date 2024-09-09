import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {
  HttpClientJsonpModule,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
  providers: [EmployeeService],
})
export class DisplayComponent implements OnInit {
  data: any;
  constructor(private empservice: EmployeeService) {}
  ngOnInit() {
    this.empservice.fetchData().subscribe((data: any) => {
      this.data = data;
      console.warn(data);
    });
  }
  deleteEmployee(empId: string): void {
   
    this.empservice.deleteEmployee(empId).subscribe({
      next: () => {
        alert('employee deletedsuccesfully');
        window.location.reload();
      },
      error: (err) => {
        alert(`error deletng employee ${err}`);
        console.log(err);
      },
    });
  }
}

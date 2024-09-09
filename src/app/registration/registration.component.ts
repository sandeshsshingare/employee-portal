import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  providers: [EmployeeService],
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private empservice: EmployeeService) {
    this.form = this.fb.group({
      EmpId: ['', [Validators.required]],
      emp: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dept: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }
  ngOnInit(): void {
    
  }
  onSubmit(): void {
    
if (this.form.valid) {
  this.empservice.saveData(this.form.value).subscribe({
    next: (response: any) => {
      console.log('Employee saved successfully!', response);
      const element = document.getElementById('Message');
     if (element !== null) {
       element.style.display = 'block';

       
       setTimeout(() => {
         if (element !== null) {
           element.style.display = 'none';
         }
       }, 5000); 
     }

      this.form.reset();
    },
    error: (error) => {
      console.error('Error saving employee', error);
    },
  });
} else {
  alert('Please input all fields!');
}
  }
  get emp() {
    return this.form.get('emp')!;
  }
  get dept() {
    return this.form.get('dept')!;
  }
  get phone() {
    return this.form.get('phone')!;
  }
  get EmpId() {
    return this.form.get('id');
  }
}

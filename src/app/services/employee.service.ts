import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {}
  // saveData(data: any) {
  //   console.warn('savedata called');
  //   console.warn(data);
  //   return this.http.post('http://localhost:3000/employee', data);

  // }
  /** POST: add a new hero to the database */
  checkDuplicate(empid: string): Observable<boolean> {
    return this.http
      .get<any[]>(this.url)
      .pipe(
        map((employees) =>
          employees.some((employee) => employee.EmpId === empid)
        )
      );
  }
  saveData(employee: any): Observable<any> {
    return this.checkDuplicate(employee.EmpId).pipe(
      switchMap((isDuplicate) => {
        if (isDuplicate) {
          // Handle the case where the employee ID is a duplicate.
          // You might want to throw an error or return a specific response.
          alert('employee id is duplicated!');
          return of({ error: 'Employee ID already exists' });
        } else {
          // Proceed to save the employee data.
          return this.http.post(this.url, employee);
        }
      })
    );
  }
  fetchData(): Observable<any> {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    //return this.http.get('assets/employee.json');
    return this.http.get(this.url);
  }
  deleteEmployee(id: string): Observable<any> {
    const apiurl = `${this.url}/${id}`;
  
    return this.http.delete(apiurl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = "http://localhost:8080/api/users";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  }

  getUserById(id: Number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  createUser(employee: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  updateUser(id: Number, employee: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteUser(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

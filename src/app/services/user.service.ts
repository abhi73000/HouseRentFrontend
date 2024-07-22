import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  //add user
  public addUser(user: any) {
    return this.http.post(`${baseUrl}/user/register`, user);
  }

  //getUserById
  public getUserById(userId: any) {
    return this.http.get(`${baseUrl}/user/get/${userId}`);
  }

  //DeleteUserBy Id
  public deleteUserById(userId: any) {
    return this.http.delete(`${baseUrl}/user/${userId}`);
  }

  public updateUser(user: any): Observable<Object> {
    return this.http.put(`${baseUrl}/user/update`, user)
      .pipe(
        catchError((error) => {
          console.error('Error updating user:', error);
          throw error; // Rethrow the error for further handling
        })
      );
  }


  public getAllUsersByUserRole(role: any) {
    return this.http.get<[]>(`${baseUrl}/user/getUsers/${role}`);
  }

}

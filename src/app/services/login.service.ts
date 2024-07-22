import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();


  constructor(private http: HttpClient) { }


  //current user which is logged in
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/currentUser`);
  }


  //generate token

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  // login user: set loken in local storage
  public loginUser(token: any) {
    localStorage.setItem("token", token);

    return true;
  }

  // idLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }



  // getToken 
  public getToken() {
    return localStorage.getItem("token");
  }

  // set user details to find current user no need to call server many times
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // get User()
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logOut();
      return null;
    }
  }


  // get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }


  
  // Checks if user roles match any of the allowed roles
  roleMatch(allowedRoles: string[]): boolean {
    const userRole = this.getUserRole();
    return userRole !== null && allowedRoles.includes(userRole);
  }

  //LogOut: remove token from local storage
  public logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }




}


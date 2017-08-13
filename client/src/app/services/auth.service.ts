import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  authToken;
  user;

  options;

  constructor(private http: Http) { }

  createAuthHeaders() {
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    }) 
  }
  
  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken() {
    const token = localStorage.getItem('token')
    this.authToken = token;
  }

  register(userInfo) {
    return this.http.post('http://localhost:8080/post/register', userInfo)
    .map((res) => res.json())
  }

  login(userInfo) {
    return this.http.post('http://localhost:8080/post/login', userInfo)
    .map((res) => res.json())
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  } 

  getProfile() {
    this.createAuthHeaders()
    return this.http.get('http://localhost:8080/get/profile', this.options)
    .map(res => res.json())
  }
}

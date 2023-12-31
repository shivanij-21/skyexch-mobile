import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;



  constructor(private http: HttpClient, private main: MainService) {
    this.main.apis2$.subscribe((res) => {
      if (res) {
        this.baseUrl = res.ip;
      }
    })
  }
  getImg() {
    return this.http.get(`${this.baseUrl}/img.png/`);
  }
  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  logout() {
    return this.http.get(`${this.baseUrl}/logout`);
  }
  changePassword(data: any) {
    return this.http.post(`${this.baseUrl}/updateUser`, data);
  }
}

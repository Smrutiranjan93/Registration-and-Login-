import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API = 'http://117.211.75.160:8080/ForestDept/api';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    this.http.post(this.API + '/login', data).subscribe((result: any) => {
      localStorage.setItem('token', result.access_token);
      this.router.navigate(['./signup']);
      console.log(result);
    });
  }
}

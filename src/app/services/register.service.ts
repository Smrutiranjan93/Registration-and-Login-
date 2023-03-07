import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 API='http://117.211.75.160:8080/ForestDept/api/';

  constructor(private http:HttpClient) { }

  proceedingRegister(inputData:any){
    return this.http.post(this.API +'userRegistration',inputData)
  }
}

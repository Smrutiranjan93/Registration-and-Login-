import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  loggedIn: any;
  constructor(private loginService:LoginService,private toast:ToastrService ) { }

  ngOnInit(): void {

  }
save(data:any){
this.loginService.login(data);
this.toast.success("login Successfully");

}
}

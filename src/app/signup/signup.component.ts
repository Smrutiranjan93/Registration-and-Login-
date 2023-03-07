import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private builder:FormBuilder,private toast:ToastrService,private register:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  registerForm=this.builder.group({
    FirstName:this.builder.control('',Validators.required),
    LastName:this.builder.control('',Validators.required),
    PhoneNumber:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(10)])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email]) ),
    password:this.builder.control('',Validators.required)
  })
  proceedingRegistration(){
    if(this.registerForm.valid){
      this.register.proceedingRegister(this.registerForm.value).subscribe((res)=>{
        this.toast.success("Register Successfully");
        this.router.navigate(['login']);
      })
    }else{
      this.toast.warning('please enter valid Data');
      this.toast.error('Registration Failed');
    }
  }
}

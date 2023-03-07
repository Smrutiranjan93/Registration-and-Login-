import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // registerForm: FormGroup<any>;
  // submitted:boolean;
  constructor(private formBuilder: FormBuilder) {
    // this.registerForm = new FormControl();
    // this.registerForm.setValue({
    //   name: 'John Doe',
    //   email: 'johndoe@example.com',
    //   password: 'password',
    // });
  }

  ngOnInit(): void {
    // this.registerForm=this.formBuilder.group({

    // })

    // registerForm = new FormGroup({
    //   name: new FormGroup({
    //     FirstName: new FormControl('', Validators.required),
    //     LastName: new FormControl('', Validators.required),
    //     PhoneNumber: new FormControl('', Validators.required),
    //     email: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required),
    //   }),
    // });
  }
}

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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    BodyComponent,
    ForgotPasswordComponent,
    QueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

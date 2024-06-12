import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    AccessdeniedComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    LoginpageComponent
  ]
})
export class LoginModule { }

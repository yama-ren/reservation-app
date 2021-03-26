import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/registercomponent';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: []
})
export class AuthModule { }

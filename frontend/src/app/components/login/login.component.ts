import { Component } from '@angular/core';
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {AuthService} from "../../services/auth.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private cookieService: CookieService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  sendLoginCredentials = () => {
    this.authService.login(
        {
          email: this.loginForm.get('email')?.value!,
          password: this.loginForm.get('password')?.value!
        }
    ).subscribe(body => {
      if (!body.token || body.userId) return

      this.cookieService.set('token', body.token)
      this.cookieService.set('userId', body.userId.toString())


    });
  }
}

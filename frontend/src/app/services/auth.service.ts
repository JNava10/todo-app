import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import {LoginCredentials, LoginResult} from "../interfaces/login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials): Observable<LoginResult> {
    const body = {
      email: credentials.email,
      password: credentials.password,
    }

    return this.http.post<LoginResult>(`${environment.apiUri}/user/login`, body)
  }
}

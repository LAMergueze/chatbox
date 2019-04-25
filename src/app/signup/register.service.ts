import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: Http) { }

  public doRegister(username: string, password: string): Observable<Response> {
    let params = 'username=' + username + '&pwd=' + password;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    return this.http.post('http://cesi.cleverapps.io/signup', params, { headers: headers });
  }
}

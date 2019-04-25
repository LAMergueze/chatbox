import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: Http) { }

  public doGetUsers(): Observable<Response> {

      const headers = new Headers();

      headers.append('Content-type', 'application/x-www-form-urlencoded');
      headers.append('token', sessionStorage.getItem('token'));

      return this.http.get('http://cesi.cleverapps.io/users', { headers: headers });
    }
}

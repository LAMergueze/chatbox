import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public http: Http) { }

    public doGetMessages(): Observable<Response> {

      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('token', sessionStorage.getItem('token'));

      return this.http.get('http://cesi.cleverapps.io/messages', { headers: headers });
    }

    public doSendMessages(message: string): Observable<Response> {
      let params = 'message=' + message;

      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('token', sessionStorage.getItem('token'));

      return this.http.post('http://cesi.cleverapps.io/messages', params, { headers: headers });
    }
}

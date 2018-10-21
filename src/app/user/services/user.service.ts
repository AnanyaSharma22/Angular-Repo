import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { User } from './../interfaces/user';
import { AccountUserApiEndPoints } from '../../app.config';
// import { HttpService } from './../../core/http/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import { map } from "rxjs/operators";

const apiHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    //   'Authorization': 'bearer CZkzmiN9JUiIGBrpw6NZ9PkNSFhJ0G'
    })
}

@Injectable()
export class UserService {
    private url: string = AccountUserApiEndPoints.apiEndpoint;
    // protected headers: Headers
    constructor(private http: HttpClient) { }

    userLogin(email: string, password: string){
        return this.http.post<any>(this.url + 'login/', { email: email, password: password }, apiHeaders);
    }

}

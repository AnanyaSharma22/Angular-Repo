import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { AppPropertyApiEndPoints } from './../../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Property } from './../interfaces/property';

const apiHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    //   'Authorization': 'bearer CZkzmiN9JUiIGBrpw6NZ9PkNSFhJ0G'
    })
}

@Injectable()
export class PropertyService {
    // debugger
    private url: string = AppPropertyApiEndPoints.apiEndpoint;
    // protected headers: Headers
    constructor(private http: HttpClient) { }

    getProperties(){
        return this.http.get<any>(this.url + 'properties/', apiHeaders);
    }

    // private extractData(res: Response) {
    //     if (res.ok && res.status === 200) {
    //         const body = res.json();
    //         return body || {};
    //     } else {
    //         return throwError('error');;
    //     }
    // }

}
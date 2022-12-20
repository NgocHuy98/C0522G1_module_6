import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/i-customer';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL: string;

  httpOptions: any;
  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) {
    this.API_URL = environment.api_url;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenService.getToken()
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  findCustomerByUsername(): Observable<any> {
    console.log(environment.api_url + '/customer/find-username/', this.httpOptions);
    return this.http.get<ICustomer>(environment.api_url + '/customer/find-username/', this.httpOptions);
  }

}

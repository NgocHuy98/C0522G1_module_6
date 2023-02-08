import {Injectable} from '@angular/core';
import {Observable, ObservedValueOf} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ICart} from '../model/i-cart';
import {ICartDto} from '../dto/i-cart-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.api_url;
  }

  findCartByUser(username: string): Observable<ICartDto[]> {
    return this.http.get<ICartDto[]>(this.API_URL + '/cart/' + username);
  }

  increase(id: number): Observable<void> {
    return this.http.get<void>(this.API_URL + '/cart/increase/' + id);
  }

  decrease(id: number): Observable<void> {
    return this.http.get<void>(this.API_URL + '/cart/decrease/' + id);
  }

  deleteCart(id: number): Observable<void> {
    console.log(this.API_URL + '/cart/delete/' + id);
    return this.http.get<void>(this.API_URL + '/cart/delete/' + id);
  }

  paid(username: string): Observable<void> {
    return this.http.get<void>(this.API_URL + '/cart/paid/' + username);
  }

  getTotalPay(username: string): Observable<ICartDto> {
    return this.http.get<ICartDto>(this.API_URL + '/cart/total-pay/' + username);
  }
}

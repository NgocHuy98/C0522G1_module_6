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

  findCartByUser(id: number): Observable<ICartDto[]> {
    return this.http.get<ICartDto[]>(this.API_URL + '/cart/' + id);
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

  paid(id: number): Observable<void> {
    return this.http.get<void>(this.API_URL + '/cart/paid/' + id);
  }

  getTotalPay(id: number): Observable<number> {
    return this.http.get<number>(this.API_URL + '/cart/total-pay/' + id);
  }
}

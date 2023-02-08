import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SearchResult} from '../model/search-result';
import {IBottleDto} from '../dto/i-bottle-dto';
import {IBottle} from '../model/i-bottle';
import {Bottle} from '../model/bottle';
import {BottleDto} from '../dto/bottle-dto';

@Injectable({
  providedIn: 'root'
})
export class BottleService {
  private API_URL: string;


  constructor(private http: HttpClient) {
    this.API_URL = environment.api_url;
  }

  findAllListBottle(name: string, startPrice: number, endPrice: number, size: number): Observable<SearchResult<IBottleDto>> {
    const API_URL_HOME = this.API_URL + '/bottle/list/home?name=' + name +
      '&startPrice=' + startPrice + '&endPrice=' + endPrice + '&size=' + size;
    console.log(API_URL_HOME);
    return this.http.get<SearchResult<IBottleDto>>(API_URL_HOME);
  }

  // findAllListBottle(name: string, size: number): Observable<SearchResult<IBottleDto>> {
  //
  //   const API_URL_HOME = this.API_URL + '/bottle/list/home?name=' + name +
  //     '&size=' + size;
  //   return this.http.get<SearchResult<IBottleDto>>(API_URL_HOME);
  // }

  findById(id: number): Observable<BottleDto> {
    return this.http.get<BottleDto>(this.API_URL + '/bottle/detail/' + id);
  }

  addToCart(quantity: number, username: string, bottleId: number): Observable<void> {
    console.log(this.API_URL + '/cart/add/' + quantity + '&' + username + '&' + bottleId);
    return this.http.get<void>(this.API_URL + '/cart/add/' + quantity + '&' + username + '&' + bottleId);
  }

  getById(id: number): Observable<IBottle> {
    return this.http.get<IBottle>(this.API_URL + '/bottle/' + id);
  }

  updateBottle(bottle: IBottle): Observable<IBottle> {
    return this.http.patch<IBottle>(this.API_URL + '/bottle/edit/' + bottle.id, bottle);
  }

  deleteBottle(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + '/bottle/delete/' + id);
  }


}

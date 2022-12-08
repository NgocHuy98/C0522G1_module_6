import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SearchResult} from '../model/search-result';
import {IBottleDto} from '../dto/i-bottle-dto';

@Injectable({
  providedIn: 'root'
})
export class BottleService {
  private API_URL: string;


  constructor(private http: HttpClient) {
    this.API_URL = environment.api_url;
  }

  findAllListBottle(name: string, size: number): Observable<SearchResult<IBottleDto>> {
    const API_URL_HOME = this.API_URL + '/bottle/list/home?name=' + name + '&size=' + size;
    console.log(API_URL_HOME);
    return this.http.get<SearchResult<IBottleDto>>(API_URL_HOME);
  }


}

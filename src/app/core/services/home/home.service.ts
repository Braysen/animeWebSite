import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl: string = environment.AnimeWebServiceApi;

  constructor(private http: HttpClient) { }

  async getAnimeTop(){
    const url = `${this.baseUrl}top/anime`;
    return this.http.get<any>(url);
  }
}
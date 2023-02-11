import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenresMenuService{
  private baseUrl: string = environment.AnimeWebServiceApi;

  constructor(private http: HttpClient) { }

  async getAnimeGenres(){
    const url = `${this.baseUrl}genres/anime`;
    return this.http.get<any>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NorrisApiService {
  // aqui se define la url base de la api de chuck norris
  apiKey = 'b1f6c7be8e14408ca419a0638936fd6d';
  baseUrl = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient) {

  }

  getAllCategories() : Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);

  }

  getJokePerCategory(category: string) : Observable<any> {
    return this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`);

  }
}

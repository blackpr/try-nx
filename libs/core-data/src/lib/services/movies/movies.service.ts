import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@tim/api-interfaces';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  model = 'movies';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Movie[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Movie>(this.getUrlWithId(id));
  }

  create(movie: Movie) {
    return this.http.post(this.getUrl(), movie);
  }

  update(movie: Movie) {
    return this.http.put(this.getUrlWithId(movie.id), movie);
  }

  delete(movie: Movie) {
    return this.http.delete(this.getUrlWithId(movie.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}

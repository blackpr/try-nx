import { Component, OnInit } from '@angular/core';
import { Movie } from '@tim/api-interfaces';
import { MoviesFacade } from '@tim/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'tim-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  allMovies$: Observable<Movie[]> = this.moviesFacade.allMovies$;

  constructor(private moviesFacade: MoviesFacade) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesFacade.loadMovies();
  }
}

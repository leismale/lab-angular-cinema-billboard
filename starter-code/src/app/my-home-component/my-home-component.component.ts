import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  list: Array<object> = [];
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.list = this.moviesService.getMovies();
    // this.list = this.moviesService.movies;
    console.log(this.list)
  }

}

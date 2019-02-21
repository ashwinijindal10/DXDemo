import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Observable } from 'rxjs';
import { Movie, ActionStatus } from '../models/model';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieSvc:MovieService,
    private msgSvc :MessageService) {

   }

  ngOnInit() {
  }

  movieList(): Observable<Movie[]> {
    return this.movieSvc.getMovies();
  }

  deleteMovie(id){
    this.movieSvc.deleteMovie(id);
    this.msgSvc.ShowMsg("Movie deleted successfully",ActionStatus.Success);
   
    return false;
  }
  
}

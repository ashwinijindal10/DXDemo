import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  pictures: object[] = [
    { title: 'xx1' },
    { title: 'xx2' },
    { title: 'xx3' },
    { title: 'xx4' }
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Person } from '../../models/model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  ELEMENT_DATA: Person[] = [
    { id:1, name: 'Post One', bio:'',dob :new Date(),sex:'M'},
    { id:2, name: 'Post two', bio:'',dob :new Date(),sex:'M'},
  ];

  getMovies(): Observable<Person[]> {
    return of<Person[]>(this.ELEMENT_DATA);
  }
  
  addMovie(person:Person){
      this.ELEMENT_DATA.push(person)
  }

  deleteMovie(id:number) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, id), ...this.ELEMENT_DATA.slice(id + 1)];
  }
}

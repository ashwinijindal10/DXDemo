import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AddPersonComponent } from '../add-person/add-person.component';
import { PersonType, Person, ActionStatus } from '../models/model';
import { MovieService } from '../shared/services/movie.service';
import { MessageService } from '../shared/services/message.service';
import { PopupService } from '../shared/services/popup.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  post: any = '';
  formGroup: FormGroup;
  procedures: Person[]=[];
  actors: Person[]=[];

  constructor(
    private movieSvc:MovieService,
    private popupSvc :PopupService,
    private formBuilder: FormBuilder,
    private msgSvc :MessageService,
    ) {
  }

  ngOnInit() {
    this.createForm();
    this.movieSvc.getMovies().subscribe(f=>{

    })
  }


  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.required]],
      'year_of_release': [null, Validators.required],
      'plot': [null],
      'actors': [null],
      'poster': [null],
      'producer': [null],
    });
  }


  onSubmit(post) {
    this.post = post;
    this.msgSvc.ShowMsg("Movie saved successfully",ActionStatus.Success);
    return false;
  }


  openRepDialog(type:PersonType) {
    this.popupSvc.showPopup(AddPersonComponent,{type},
      (res: Person) => {
        if (type==PersonType.Actor)
            this.actors.push(res);
        else
            this.procedures.push(res);
  
      })
   
  }

  addProducer() {
    this.openRepDialog(PersonType.Producer);
    this.msgSvc.ShowMsg("Producer saved successfully",ActionStatus.Success);
    return false;
  }

  addActor() {
    this.openRepDialog(PersonType.Actor);
    this.msgSvc.ShowMsg("Actor saved successfully",ActionStatus.Success);
    return false;
  }
}




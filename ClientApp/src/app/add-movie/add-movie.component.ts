import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AddPersonComponent } from '../add-person/add-person.component';
import {  PersonType, Person } from '../models/model';

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
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private mDialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
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
  }



  openSnackbar() {
    const refSnackbar = this.snackbar.open("Movie Saved", "UNDO", {
      horizontalPosition: 'end',
      duration: 2000
    });

    refSnackbar.onAction().subscribe(() => {
      alert('undo that saved');
    });
  }

  openRepDialog(type) {
    const dialogRef = this.mDialog.open(AddPersonComponent, {
      width: '400px',
      data: {
        type
      }
    });
    dialogRef.updatePosition({ top: '5%' });

    dialogRef.afterClosed().subscribe(res => {
      if (PersonType.Actor)
          this.actors.push(res);
      else
          this.procedures.push(res);

    });
  }

  addProducer() {
    this.openRepDialog(PersonType.Producer);
    return false;
  }

  addActor() {
    this.openRepDialog(PersonType.Actor);
    return false;
  }
}




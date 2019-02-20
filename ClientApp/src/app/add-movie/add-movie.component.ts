import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  post: any = '';
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private mDialog: MatDialog,) {

  }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
    //this.emailFormCtrl = new FormControl('', [
    //  Validators.required,
    //  Validators.email
    //]);
    //this.FirstCtrl = new FormControl('', [
    //  Validators.required
    //]);
    //this.LastCtrl = new FormControl('', [
    //  Validators.required
    //]);
    //this.AddressCtrl = new FormControl('', [
    //  Validators.required
    //]);
    //this.PhoneCtrl = new FormControl('', [
    //  Validators.required
    //]);
  }


  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.required]],
      'year_of_release': [null, Validators.required],
      'plot': [null],
      'actors': [null],
      'poster': [null],
      'director': [null],
    });
  }

  setChangeValidate() {
    //this.formGroup.get('validate').valueChanges.subscribe(
    //  (validate) => {
    //    if (validate == '1') {
    //      this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    //      this.titleAlert = "You need to specify at least 3 characters";
    //    } else {
    //      this.formGroup.get('name').setValidators(Validators.required);
    //    }
    //    this.formGroup.get('name').updateValueAndValidity();
    //  }
    //)
  }

  onSubmit(post) {
    this.post = post;
  }


  openRepDialog() {
  //  const dialogRef = this.mDialog.open(RepDialogComponent, {
  //    width: '200px',
  //    data: {}
  //  });

  //  dialogRef.afterClosed().subscribe(res => {
  //    alert(`user choosed ${res}`)
  //  })
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

  

    
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',// correct more spelling errors found
  styleUrls: ['./reset-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordComponent implements OnInit { //corrected filenameand class name spelling

  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}

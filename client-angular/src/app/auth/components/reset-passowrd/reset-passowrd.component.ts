import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.css']
})
export class ResetPassowrdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}

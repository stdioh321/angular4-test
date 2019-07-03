import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  users = [];
  usersApi: Array<any> = [];
  constructor(http: HttpClient) {
    http.get("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      setTimeout(()=>{
        this.usersApi = <Array<any>>data;
      }, 4000);
      // console.log(data);
    }, err => {

    })
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("John", Validators.compose([
        Validators.required,
        Validators.pattern(/^\w{3,}/)
      ])),
      email: new FormControl("abc@gmail.com", Validators.compose([
        Validators.required,
        Validators.pattern(/^\w+@\w+\.\w/)
      ])),
      date: new FormControl("1990",
        Validators.compose([
          Validators.required,
          this.validDate
        ]))
    });


  }
  validDate(val) {
    if (val.value >= 1900 && val.value <= (new Date()).getFullYear())
      return null;
    return { 'range': true }

  }
  submitForm<User>(form) {
    this.users.push(form.value);
    console.log(form);
    this.resetForm();
  }
  resetForm() {
    this.myForm.reset();
  }

}

interface User {
  name: string;
  email: string;
  date: string;
}
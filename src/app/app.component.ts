import { Component } from '@angular/core';
import { MyServiceService } from "./my-service.service";

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from "@angular/http";
import { HttpClient, HttpResponse, HttpRequest } from "@angular/common/http";
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users = [];
  todayDate;
  isavailable = false;
  daysWeek = ['Sundary', "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];
  months = [{ "name": "January" }, { "name": "Feburary" }, { "name": "March" }, { "name": "April" }, { "name": "May" }, { "name": "June" }, { "name": "July" }, { "name": "August" }, { "name": "September" }, { "name": "October" }, { "name": "November" }, { "name": "December" }];
  configUrl = 'http://jsonplaceholder.typicode.com/users';

  formData;

  constructor(
    private myService: MyServiceService,
    private http: Http,
    private httpClient: HttpClient) {
    // console.log("Date from the service: ", myService.showTodayDate());
    // this.http.get('http://jsonplaceholder.typicode.com/users')
    //   .subscribe((item) => {
    //     console.log(item);
    //   });


    // console.log(this.httpClient.get<Config>(this.configUrl));
    // console.log(this.getData() instanceof Observable);
    // this.getData()
    //   .subscribe((data) => {
    //     console.log(data);
    //   }, err => {
    //     console.log(err);
    //   });
    this.getData();
  }
  ngOnInit() {
    this.todayDate = this.myService.showTodayDate();
    this.formData = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/\w+@\w+\.\w+/)
      ])),
      password: new FormControl("",
        Validators.compose([
          Validators.required,
          this.passValidation])
      ),
    });
  }

  passValidation(formControl) {
    if (formControl.value.length < 5) {
      return { "password": true };
    }

  }
  submitForm(form) {
    console.log(form);
  }
  getData(id?) {
    // let req = new HttpRequest('GET', this.configUrl,{a:1});
    // return this.httpClient.request(req)

    this.http.get(this.configUrl + (!!id ? id : ""))
      .map(data => data.json())
      .subscribe(data => {
        console.log(data);
        this.users = data;
      }, err => {
        console.log(err);
      });
  }
  searchById(val) {
    // console.log(val.value);
    return val.value;

  }
  showOnConsole(val, event) {
    console.log(val, event);
  }
  addClass(className, item, idx) {
    item.target.classList.add(className);
    // item.classList.add(className);
    this.months.forEach((item) => {
      if (this.months.indexOf(item) != idx) {
        item['notSelected'] = true;
      }
    });
  }
  removeClass(className, item, idx) {
    item.target.classList.remove(className);
    // item.classList.add(className);
    this.months.forEach((item) => {

      item['notSelected'] = false;

    });
  }
  state: string = "smaller";
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }
}
export interface Config {
  heroesUrl: string;
  textfile: string;
}
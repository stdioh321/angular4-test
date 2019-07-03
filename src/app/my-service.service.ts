import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  public serviceProperty = "Nothing";
  constructor() { }
  showTodayDate(){
    return new Date();
  }
}

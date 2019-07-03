import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MyServiceService } from "../my-service.service";


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
  
})
export class StatesComponent implements OnInit {
  @Input() inputTest: string;
  state = "small";
  formdata;
  constructor(private myService: MyServiceService) {
    // this.formdata = new FormGroup({
    //       emailid: new FormControl("", Validators.compose([
    //          Validators.required,
    //          Validators.pattern("[^ @]*@[^ @]*")
    //       ])),
    //       passwd: new FormControl("")
    //    });
  }

  ngOnInit() {
    console.log(this.myService.serviceProperty);
    this.myService.serviceProperty = "States change it, now you have something.";
    console.log(this.myService.serviceProperty);
    this.formdata = new FormGroup(
      {
        name: new FormControl("", Validators.compose([
          Validators.required
          // Validators.pattern(/[^\W_]/)
        ])),
        email: new FormControl("",
          Validators.compose([
            Validators.required,
            Validators.pattern(/\w{1,}@\w{1,}\.\w{1,}/)
          ]))
      }
    );
  }
  sendForm(form) {
    console.log(form);
  }
  // onClickSubmit(form){
  // 	console.log(form);
  // 	this.emailid = form.value.emailid;
  // }
}

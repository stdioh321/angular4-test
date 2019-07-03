import { Component, OnInit } from '@angular/core';

import { MyServiceService } from "../my-service.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  tmpCity = {};
  cityList = [{ city_name: "Bandung", prov_name: "Jawa Barat" },
  { city_name: "Jakarta", prov_name: "DKI Jakarta" },
  { city_name: "Surabaya", prov_name: "Jawa Timur" },
  { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
  { city_name: "Semarang", prov_name: "Jawa Tengah" },
  { city_name: "Medan", prov_name: "Sumatera Utara" },
  { city_name: "Tangerang", prov_name: "Banten" },
  { city_name: "Denpasar", prov_name: "Bali" },
  { city_name: "Makasar", prov_name: "Sulawesi Selatan" }];

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    console.log(this.myService.serviceProperty);
    this.myService.serviceProperty = "Cities change it, now you have something.";
    console.log(this.myService.serviceProperty);
  }
  lookForm(tmp) {
    console.log(tmp);
  }
  register(form) {
    // console.log(form.get('cityName'));
    let c = { "city_name": form.controls.nameCity.value, "prov_name": form.controls.nameProvName.value }
    this.cityList.push(c);

    // console.log(c);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-registration',
  templateUrl: './employeeRegistration.component.html',
  
})
export class RegistrationComponent implements OnInit {
  ngOnInit(): void {

  }

  country:any[]=[
  { name:"india",states:[{name:"U.P",cities:["Gorakhpur","Lucknow","Ghaziabad"]},{name:"delhi",cities:[" Newdelhi","Firozabad"]}]},
   {name:"AUS",states:[{name:"New South Wales",cities:["Sydney","Newcastle"]}]},
   {name:"UK",states:[{name:"A",cities:["X","Y","Z"]}]}
  ];
  states:Array<any>=[];
  cities:Array<any>=[];
  changeCountryname(country:any){
    this.states=this.country.find(c=>c.name==country.target.value).states ;
  }
  changeState(states:any){
    this.cities=this.states.find(c=>c.name==states.target.value).cities;
  }
  Firstname:string="";
  Middlename:string="";
  Lastname:string="";
  DOB:string="";
  Gender:string="";
  Pincode:string="";
  Country:string="";

  






// }
}



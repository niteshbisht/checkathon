import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grievapp',
  templateUrl: './grievapp.component.html',
  styleUrls: ['./grievapp.component.css']
})
export class GrievappComponent implements OnInit {
  public states:any;
  public selectedState:any;
  public selectedRegion:any;
  public selectedDept:any;
  public grieveText:any;

  constructor() {
    this.states={};
    this.selectedState="";
    this.states.names=[{'name':'A'},{'name':'B'},{'name':'C'},{'name':'D'}];
    this.states.region=[{'name':'A'},{'name':'B'},{'name':'C'},{'name':'D'}];
    this.states.dept=[{'name':'A'},{'name':'B'},{'name':'C'},{'name':'D'}];
   }

  ngOnInit() {
  }

  formSubmit(params:any){
    console.log(params);
  }

}

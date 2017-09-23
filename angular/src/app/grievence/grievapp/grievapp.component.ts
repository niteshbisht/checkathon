import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grievapp',
  templateUrl: './grievapp.component.html',
  styleUrls: ['./grievapp.component.css']
})
export class GrievappComponent implements OnInit {
  public states:any;
  public selectedState:any;

  constructor() {
    this.states={};
    this.selectedState="";
    this.states.names=[{'name':'A'},{'name':'B'},{'name':'C'},{'name':'D'}];
   }

  ngOnInit() {
  }

}

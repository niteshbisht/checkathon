import { Component } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { RegistrationModel } from "./register_model";
@Component({
  moduleId: module.id,
  selector: "app-root",
  templateUrl: "login.component.html"
})
export class LoginComponent {
  regmodel: RegistrationModel;
  regSuccess:boolean;
  regError:boolean;
  constructor(private http: Http, private router: Router) {
    this.regmodel = new RegistrationModel();
  }

  registerNewUser() {
    let headersInfo = new Headers();
    headersInfo.set('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headersInfo });
    this.http.post('http://localhost:8080/statelesssocial/registerNewUser',JSON.stringify(this.regmodel),options)
    .map(res=>res.json()).subscribe(result=>{
      this.regSuccess = true;
      console.log('registration sucess');
    },
    error=>{
      this.regError = true;
      console.log('registration unsucessfull');
    });

  }

  validateUser(){
      this.http.get('http://localhost:8080/statelesssocial/validateUser').map(res=> res.json)
      .subscribe(result=>{

      },
      error=>{
        console.log('error');
      });

  }
}
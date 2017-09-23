import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import 'rxjs/Rx';
import { UserModel } from "./admin_model";
@Component({
  moduleId: module.id,
  selector: "user-view",
  templateUrl: "admin.html",
  styleUrls: ["admin.css"]
})
export class AdminComponent {
  headers = new Headers();
  providerCookie: string;
  authcookie: string;
  cookies: Object;
  options: RequestOptions;
  result: UserModel[];
  constructor(private http: Http, private router: Router) {
    this.cookies = Cookie.getAll();
    this.providerCookie = this.cookies["provider_cookie"];
    this.authcookie = this.cookies["AUTH-TOKEN"];
    this.headers.set("x-auth-token", this.authcookie);
    this.options = new RequestOptions({ headers: this.headers });
    this.http
      .post(
        "http://localhost:8080/statelesssocial/api/user/showallusers",
        this.options
      )
      .map((res: Response) => res.json())
      .subscribe(
        json => {
          console.log(json);
          this.result = json;
          this.result.forEach(e=>{
            if(e.role=='admin'){
                e.isAdmin=true;
            }
          });
          console.log(this.result);
        },
        err => {
          console.error(err);
        }
      );
  }
  promoteToAdmin() {
    let localData = [];  
    this.result.forEach(e=>{
        e.role = e.isAdmin?'admin':'user';
        localData.push({userId:e.id,isAdmin:e.isAdmin});
    });
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let promoteOptions = new RequestOptions({ headers: header });
      this.http.post('http://localhost:8080/statelesssocial/api/user/promoteUsers',JSON.stringify({"data":localData}),promoteOptions).map((res:Response)=>{
          res.json()
      }).subscribe(json=>{
         console.log(json);
        },
        err=>{
            console.log('error');
        });

  }
}
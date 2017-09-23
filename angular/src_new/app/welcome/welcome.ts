import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { UserDetails } from '../models/UserDetails';
import {  
  FormBuilder,  
  FormGroup,  
  Validators,  
  AbstractControl  
} from '@angular/forms';

import 'rxjs/Rx';
@Component({
    moduleId: module.id,
    selector: 'profile-view',
    templateUrl: 'welcome.html',
    styleUrls: ['welcome.css']
})
export class WelcomeComponent {
    headers = new Headers();
    providerCookie: string;
    authcookie: string;
    cookies: Object;
    userdetails: UserDetails;
    submitted:boolean=false;
    constructor(private http: Http) {
        this.userdetails = new UserDetails();
        this.cookies = Cookie.getAll();
        this.providerCookie = this.cookies['provider_cookie'];
        this.authcookie = this.cookies['AUTH-TOKEN'];
        this.headers.set('x-auth-token', this.authcookie);
        let options = new RequestOptions({ headers: this.headers });
        if (this.providerCookie === 'facebook') {
            this.http.get('http://localhost:8080/statelesssocial/api/facebook/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'linkedin') {
            this.authcookie = this.cookies['linkedin_code'];
            console.log(this.authcookie);
            this.http.get('http://localhost:8080/statelesssocial/api/linkedin/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }   
        if (this.providerCookie === 'google') {
            this.http.get('http://localhost:8080/statelesssocial/api/google/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'github') {
            this.http.get('http://localhost:8080/statelesssocial/api/github/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'live') {
            this.http.get('http://localhost:8080/statelesssocial/api/live/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'twitter') {
            this.http.get('http://localhost:8080/statelesssocial/api/twitter/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'user') {
            this.http.get('http://localhost:8080/statelesssocial/api/user/details', options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }    
    }

    onSubmit() { this.submitted = true; }

}
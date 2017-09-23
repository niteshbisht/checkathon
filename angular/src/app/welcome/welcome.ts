import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { UserDetails } from '../models/UserDetails';
import { FormBuilder,FormGroup,Validators,AbstractControl } from '@angular/forms';
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
    isEditable:boolean = false;
    options:RequestOptions;
    savesuccessFlag:Boolean;
    errorFlag:Boolean;
    constructor(private http: Http,private router: Router) {
        this.userdetails = new UserDetails();
        this.cookies = Cookie.getAll();
        this.providerCookie = this.cookies['provider_cookie'];
        this.authcookie = this.cookies['AUTH-TOKEN'];
        this.headers.set('x-auth-token', this.authcookie);
        this.options = new RequestOptions({ headers: this.headers });
        if (this.providerCookie === 'facebook') {
            this.http.get('http://localhost:8080/statelesssocial/api/facebook/details', this.options)
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
            this.http.get('http://localhost:8080/statelesssocial/api/linkedin/details', this.options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }   
        if (this.providerCookie === 'google') {
            this.http.get('http://localhost:8080/statelesssocial/api/google/details', this.options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'github') {
            this.http.get('http://localhost:8080/statelesssocial/api/github/details', this.options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'live') {
            this.http.get('http://localhost:8080/statelesssocial/api/live/details', this.options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'twitter') {
            this.http.get('http://localhost:8080/statelesssocial/api/twitter/details', this.options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }
        if (this.providerCookie === 'user') {
            this.http.get('http://localhost:8080/statelesssocial/api/user/details', this.options)
                .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.userdetails = new UserDetails().fromJSON(json);
                    console.log(this.userdetails);
                },
                err => { console.error(err) }
                );
        }    
    }

    onSubmit(data) { 
        this.submitted = true; 
        console.log(data);
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('x-auth-token', this.authcookie);
        this.options = new RequestOptions({ headers: this.headers });
        this.http.post('http://localhost:8080/statelesssocial/api/user/saveUser', JSON.stringify(data) , this.options )
        .map((res: Response) => res.json())
                .subscribe((json: Object) => {
                    this.savesuccessFlag = true;
                    console.log(this.savesuccessFlag);
                },
                err => { 
                    this.errorFlag  = true;
                }
        );
    }

    logOut(){
        this.providerCookie='';
        this.cookies = null;
        this.authcookie=null;
        this.deleteCookie('AUTH-TOKEN');
        this.deleteCookie('provider_cookie');
        this.router.navigateByUrl('/login');
    }

    private deleteCookie(name) {
        this.setCookie(name, '', -1,'/');
    }

    private setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }


    private getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    enableFieldEdit(){
        this.isEditable = true;  
    }
    viewuserdetailpage(){
        this.router.navigateByUrl('/adminPage');
    }
}
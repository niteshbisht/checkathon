import { Component } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies';
@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
  
constructor(private http: Http,private router:Router) {
  }
}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/index';
import { WelcomeComponent } from './welcome/welcome';
import { LoginComponent } from './login/index';
const routes: Routes = [
{ path: 'login'  ,component: LoginComponent},
{ path: 'welcome'  ,component: WelcomeComponent },
{ path: 'test'  ,component: WelcomeComponent,canActivate: [AuthGuard] },
{ path: '', redirectTo:'test', pathMatch:'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers:[
    AuthGuard
  ]
})
export class AppRoutingModule {

}
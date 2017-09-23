import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes ,provideRoutes} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/index';
import { AdminComponent } from './admin/admin';
import { FormsModule }   from '@angular/forms';
import { GrievappComponent } from './grievence/grievapp/grievapp.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    AdminComponent,
    GrievappComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

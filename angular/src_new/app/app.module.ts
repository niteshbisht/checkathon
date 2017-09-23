import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes ,provideRoutes} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/index';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	  WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

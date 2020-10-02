import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    LoginComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    [NgbPaginationModule, NgbAlertModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePannelComponent } from './share/side-pannel/side-pannel.component';
import { LoginComponent } from './auth/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from "./share/dashboard/dashboard.component"
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './share/material/material.module';
import { RegisterComponent } from './auth/register/register.component';
// import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { headerInterceptorClass } from "./http-interceptor/index";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidePannelComponent,
    RegisterComponent,
    // SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    // AngularFontAwesomeModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [headerInterceptorClass],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

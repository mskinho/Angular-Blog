import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http'

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';

import { AuthService } from './services/auth.service';
import { GeneralService } from './services/general.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';


import { EditPostComponent } from './edit-post/edit-post.component';
import { EditBioComponent } from './edit-bio/edit-bio.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ReturnmailComponent } from './resetpassword/returnmail/returnmail.component';
import { SearchComponent } from './search/search.component';
import { FeedComponent } from './feed/feed.component';
import { MininavComponent } from './mininav/mininav.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    Profile1Component,
    EditPostComponent,
    EditBioComponent,
    ResetpasswordComponent,
    ReturnmailComponent,
    SearchComponent,
    FeedComponent,
    MininavComponent,
    ContactComponent
  ],
  imports: [
    MdTabsModule,
    MdToolbarModule,
    FlashMessagesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, GeneralService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

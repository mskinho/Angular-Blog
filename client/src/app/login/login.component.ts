import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  email: string;
  
  constructor(
    private router: Router, 
    private _flashMessageService: FlashMessagesService, 
    private authService: AuthService,
  ) { }

  ngOnInit() {
   
  }

  login(email, password) {
    var userInfo = {
      email: email,
      password: password
    }
    this.authService.login(userInfo)
    .subscribe((data) => {
      if(data.success === true) {
      this.authService.storeUserData(data.token, data.user)
      this._flashMessageService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
      setTimeout(() => {
          this.router.navigate(['/profile'])
      }, 2000)
      } else {
         this._flashMessageService.show(data.message, { cssClass: 'alert-danger',timeout: 2000 });
         return false;
      }
    })
  }

}

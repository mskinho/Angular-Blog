import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router, 
    private authService: AuthService, 
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
 
  }

    register(email, username, password, confirm) {
      var userInfo = {
        email: email,
        username: username,
        password: password
      }
      if(password === confirm) {
      this.authService.register(userInfo)
      .subscribe((data) => {
        this._flashMessagesService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000)
      })
    } else {
      this._flashMessagesService.show('Passwords did not match, Please try again.', { cssClass: 'alert-danger',timeout: 2000 });
      return false;
    }
  }


}

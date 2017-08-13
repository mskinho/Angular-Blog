import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(
    private http: Http,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  send(email) {
    var data = {
      email: email
    }
    this.http.post('http://localhost:3000/post/resetpassword', data)
    .map(res => res.json())
    .subscribe(data => {
      this.router.navigate(['/login'])
      this._flashMessagesService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
    })
  }

}

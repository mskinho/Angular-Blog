import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: string;
  
  constructor(
    private router: Router,
    private http: Http,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  send(message) {
    var data = {
      message: message
    }
    this.http.post('http://localhost:8080/post/contact', data)
    .map(res => res.json())
    .subscribe((data) => {
      if(data.success === true) {
        var messageClass = 'alert-success';
      } else {
        var messageClass = 'alert-danger';
      }
      this._flashMessagesService.show(data.message, {cssClass: messageClass, timeout: 5000})
      this.message = '';
    })
  }

}

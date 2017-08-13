import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-returnmail',
  templateUrl: './returnmail.component.html',
  styleUrls: ['./returnmail.component.css']
})
export class ReturnmailComponent implements OnInit {
  private sub: any;
  token: string;
  newpassword: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private http: Http,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {

      this.sub = this.activeRoute.params.subscribe(params => {
       return this.http.get('http://localhost:8080/get/returnmail/'+params.token)
       .map((res) => res.json())
       .subscribe(data => {
        this.token = data.token;
       })
    }) 
  }

  updatePassword(newpassword) {
    var data = {
      password: newpassword
    }
    return this.http.post('http://localhost:8080/post/returnmail/'+this.token, data)
    .map(res => res.json())
    .subscribe(data => {
      this.router.navigate(['/login'])
      this._flashMessagesService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
    })
  }
}

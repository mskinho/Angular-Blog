import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { GeneralService } from '../services/general.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  private sub: any;
  post: Object;
  body: string;
  id: string;
  username: string;
  posted: Date;

  newpost: string;

  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router, 
    private http: Http,
    private generalService: GeneralService,
    private flashMessageService: FlashMessagesService
  ) { }

  ngOnInit() {

      this.sub = this.activeRoute.params.subscribe(params => {
       return this.http.get('http://localhost:8080/get/singlepost/'+params.id)
       .map((res) => res.json())
       .subscribe(data => {
         this.id = data.post._id;
         this.body = data.post.body;
         this.posted = data.post.posted;
         this.username = data.post._username;
       })
    }) 
  }

  update(id, body) {
    var data = {
      body: body
    }
    this.generalService.updatePost(id, data)
    .subscribe(data => {
       this.router.navigate(['/profile'])
       this.flashMessageService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
    })
  }
}

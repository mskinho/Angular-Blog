import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

   private sub: any;

   post: object;
   imageURL: string;
   title: string;
   body: string;
   posted: Date;
   comments: Array<object>;
   _username: string;
   id: string;

   comment: string;


   visitorUsername: string;
   visitorEmail: string;
   visitorId: string;
   visitorImageURL: string;

   allowed: boolean = false;
   constructor(
    private generalService: GeneralService,
    private _authService: AuthService,  
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private http: Http,
    private flashMessagesService: FlashMessagesService
  ) { }


  ngOnInit() {
  	this.loadPost();
  	this.loadCurrentUser();
  }

  loadPost() {
  	this.sub = this.activeRoute.params.subscribe(params => {
  		this.generalService.loadSinglePost(params.id)
  		.subscribe(res => {
  			console.log(res);
  			this.post = res.post;
  			this.comments = res.post.comments;
  			this.imageURL = res.post.imageURL;
  			this.title = res.post.title;
  			this.id = res.post._id;
  			this.body = res.post.body;
  			this.posted = res.post.posted;
  			this._username = res.post._username;
  		})
  	})
  }
loadCurrentUser() {
     this._authService.getProfile()
    .subscribe(data => {
    	if(data.success) {
    		 this.visitorUsername = data.user.username;
      		 this.visitorEmail = data.user.email;
      	     this.visitorId = data.user._id;
      	     this.visitorImageURL = data.user.imageURL;
      	     this.allowed = true;
    	} else {
    		this.allowed = false;
    	}
    })
  }

   postComment(comment) {
   this.generalService.postComment(this.id, comment, this.visitorUsername, this.visitorImageURL)
   .subscribe(data => {
      if(data.success) {
      	this.loadPost();
      	this.comment = '';
      } else {
      	this.flashMessagesService.show(data.message, {cssClass: 'alert-info'})
      }
   })  
 }


}

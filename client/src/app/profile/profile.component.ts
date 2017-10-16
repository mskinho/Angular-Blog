import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GeneralService } from '../services/general.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  posts: Array<any>;
  email: string;
  id: string;
  bio: string;

  body: string;

  users: Array<any>;

  comment: string;

  constructor(
    private _authService: AuthService, 
    private generalService: GeneralService, 
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

   ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._authService.getProfile()
    .subscribe(data => {
      this.username = data.user.username;
      this.email = data.user.email;
      this.id = data.user._id;
      this.bio = data.user.bio;
      this.posts = data.posts;
      console.log(data);
    })
  }

  post(id, body, username) {
    this.generalService.makeBlogPost(id, body, username)
    .subscribe(data => {
      this.getUser();
      this.body = '';
    })
  }

  deletePost(id) {
    this.generalService.deleteBlogPost(id)
    .subscribe(data => {
      this._flashMessagesService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
      this.getUser();
    })
  }
 

  editPost(id) {
    this.router.navigate(['/editpost', id])
  }

  editBio(id) {
    this.router.navigate(['/editbio', id])
  }

 postComment(id, comment, username) {
   this.generalService.postComment(id, comment, username)
   .subscribe(data => {
     this.getUser();
     this.comment = "";
   })
 }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GeneralService } from '../services/general.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  posts: Array<object>;
  title: string;
  email: string;
  id: string;
  imageURL: string;
  bio: string;

  body: string;

  users: Array<object>;

  comment: string;

  formData: any;

  constructor(
    private _authService: AuthService, 
    private generalService: GeneralService, 
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    private http: Http
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
      this.imageURL = data.user.imageURL;
      this.posts = data.posts;
      console.log(data);
    })
  }

  visitSinglePost(id) {
    this.router.navigate(['/post', id]);
  }
  
  post(id, body, username, title) {
    this.generalService.makeBlogPost(id, body, username, title, this.imageURL)
    .subscribe(data => {
      if(data.success) {
        this.getUser();
        this.body = '';
        this.title = '';
        this._flashMessagesService.show(data.message, {cssClass: 'alert-info'});
      } else {
          this._flashMessagesService.show(data.message, {cssClass: 'alert-danger'});
        }
      })
  }
  fileChange(event) {
    var uploadId: string = this.id;
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('avatar', file, file.name);
        this.generalService.uploadImage(formData, uploadId)
        .subscribe( data => this.getUser(), error => console.log(error))
      }
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



}

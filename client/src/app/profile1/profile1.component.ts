import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component implements OnInit {
  private sub: any;
  user;

  email;
  username;
  id;
  bio;
  posts;
  feed;

  Cusername;
  Cemail;
  Cid;

  constructor(
    private generalService: GeneralService,
    private _authService: AuthService,  
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private http: Http
  ) { }
  

  ngOnInit() {

      this.sub = this.activeRoute.params.subscribe(params => {
       return this.http.get('http://localhost:3000/get/findoneuser/'+params.id)
       .map((res) => res.json())
       .subscribe(data => {
         this.email = data.user.email
         this.username = data.user.username
         this.id = data.user._id
         this.posts = data.posts;
         this.bio = data.user.bio;
       })
    }) 
    this.loadAllPosts()
    this.loadCurrentUser()
  }

  loadCurrentUser() {
     this._authService.getProfile()
    .subscribe(data => {
      this.Cusername = data.user.username;
      this.Cemail = data.user.email;
      this.Cid = data.user._id;
      console.log(this.Cusername);
    })
  }
   search(input) {
    var reformat = input.toLowerCase()
    this.generalService.search(reformat)
    .subscribe(data => {
      this.user = data.users;
    })
  }

  viewprofile(id) {
    this.router.navigate(['/profile', id])
  }

   loadAllPosts() {
    this.generalService.getAllPosts()
    .subscribe(data => {
      console.log(data);
      this.feed = data.posts;
    })
  }

  postComment(id, comment, username) {
   this.generalService.postComment(id, comment, username)
   .subscribe(data => {
     console.log(data);
   })
       this.sub = this.activeRoute.params.subscribe(params => {
       return this.http.get('http://localhost:3000/get/findoneuser/'+params.id)
       .map((res) => res.json())
       .subscribe(data => {
         this.email = data.user.email;
         this.username = data.user.username;
         this.id = data.user._id;
         this.bio = data.user.bio;
         this.posts = data.posts;
       })
    }) 
 }

}

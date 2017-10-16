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
  user: Object;

  email: string;
  username: string;
  id: string;
  bio: string;
  posts: Array<any>;
  feed: Array<any>;

  Cusername: string;
  Cemail: string;
  Cid: string;

  comment: string;

  constructor(
    private generalService: GeneralService,
    private _authService: AuthService,  
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private http: Http
  ) { }
  

  ngOnInit() {
    this.loadPosts()
    this.loadAllPosts()
    this.loadCurrentUser()
  }

  loadPosts() {
    this.sub = this.activeRoute.params.subscribe(params => {
       return this.http.get('http://localhost:8080/get/findoneuser/'+params.id)
       .map((res) => res.json())
       .subscribe(data => {
         this.email = data.user.email
         this.username = data.user.username
         this.id = data.user._id
         this.posts = data.posts;
         this.bio = data.user.bio;
       })
    }) 
  }

  loadCurrentUser() {
     this._authService.getProfile()
    .subscribe(data => {
      this.Cusername = data.user.username;
      this.Cemail = data.user.email;
      this.Cid = data.user._id;
    })
  }
  

  viewprofile(id) {
    this.router.navigate(['/profile', id])
  }

   loadAllPosts() {
    this.generalService.getAllPosts()
    .subscribe(data => {
      this.feed = data.posts;
    })
  }

 
}

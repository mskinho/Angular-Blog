import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 feed: Array<any>;

  constructor(
    private generalService: GeneralService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadAllPosts();
  }

   loadAllPosts() {
    this.generalService.getAllPosts()
    .subscribe(data => {
      this.feed = data.posts;
    })
  }

}

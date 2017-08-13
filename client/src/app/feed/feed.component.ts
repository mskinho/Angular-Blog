import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed;

  constructor(
    private generalService: GeneralService
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

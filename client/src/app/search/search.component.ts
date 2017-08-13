import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GeneralService } from '../services/general.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   input: string;
   users: Array<any>;
   
   constructor(
    private _authService: AuthService, 
    private generalService: GeneralService, 
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

   viewprofile(id) {
    this.router.navigate(['/profile', id])
  }

  search(input) {
    var reformat = input.toLowerCase()
    this.generalService.search(reformat)
    .subscribe(data => {
      this.users = data.users;
    })
  }

}

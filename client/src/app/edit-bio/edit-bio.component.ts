import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { GeneralService } from '../services/general.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.css']
})
export class EditBioComponent implements OnInit {
  private sub: any;
  user: any;
  bio: string;
  id: string;

  newBio: string;

  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router, 
    private http: Http,
    private generalService: GeneralService,
    private flashMessageService: FlashMessagesService
  ) { }


   ngOnInit() {

      this.sub = this.activeRoute.params.subscribe(params => {
       return this.http.get('http://localhost:8080/get/findoneuser/'+params.id)
       .map((res) => res.json())
       .subscribe(data => {
        this.bio = data.user.bio;
        this.user = data.user;
       })
    }) 
  }

  updateBio(id, newBio) {
    var data = {
      bio: newBio,
      id: id
    }
    console.log(data);
    return this.http.post('http://localhost:8080/post/updatebio/'+id, data)
    .map(res => res.json())
    .subscribe(data => {
      if(data.success === true) {
        this.flashMessageService.show(data.message, { cssClass: 'alert-success',timeout: 2000 });
        this.router.navigate(['/profile'])
      } else {
        if(data.success === false) {
        this.flashMessageService.show(data.message, { cssClass: 'alert-danger',timeout: 2000 });
        this.router.navigate(['/profile'])
        }
      }
    })
  }


}

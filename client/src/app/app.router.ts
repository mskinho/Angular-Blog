import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditBioComponent } from './edit-bio/edit-bio.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ReturnmailComponent } from './resetpassword/returnmail/returnmail.component';
import { SearchComponent } from './search/search.component';
import { FeedComponent } from './feed/feed.component';
import { ContactComponent } from './contact/contact.component';
import { SinglePostComponent } from './single-post/single-post.component';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';

const appRoutes: Routes = [
  { path: '',                     component: HomeComponent                                        },
  { path: 'feed',                 component: FeedComponent                                        },
  { path: 'post/:id',             component: SinglePostComponent                                  },
  { path: 'resetpassword',        component: ResetpasswordComponent, canActivate: [NotAuthGuard]  },
  { path: 'login',                component: LoginComponent,         canActivate: [NotAuthGuard]  },
  { path: 'register',             component: RegisterComponent,      canActivate: [NotAuthGuard]  },
  { path: 'search',               component: SearchComponent,        canActivate: [AuthGuard]     },
  { path: 'help',                 component: ContactComponent,       canActivate: [AuthGuard]     },
  { path: 'profile',              component: ProfileComponent,       canActivate: [AuthGuard]     },
  { path: 'profile/:id',          component: Profile1Component,      canActivate: [AuthGuard]     },
  { path: 'editpost/:id',         component: EditPostComponent,      canActivate: [AuthGuard]     },
  { path: 'editbio/:id',          component: EditBioComponent,       canActivate: [AuthGuard]     },
  { path: 'returnmail/:token',    component: ReturnmailComponent,    canActivate: [NotAuthGuard]  },
  { path: '**',                   component: HomeComponent}
  
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }

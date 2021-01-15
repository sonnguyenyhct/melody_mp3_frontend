import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './user/homepage/homepage.component';
import {AuthGuard} from './helper/auth-guard';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import {ListPlaylistComponent} from './playlist/list-playlist/list-playlist.component';

const routes: Routes = [
  {
    path : '',
    component : HomepageComponent
  },
  {
    path: 'create-playlist',
    component: CreatePlaylistComponent
  },
  {
    path: 'list-playlist',
    component: ListPlaylistComponent
  },
  {
    path : 'profile',
    component: ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

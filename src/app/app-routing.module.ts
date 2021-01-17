import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './user/homepage/homepage.component';
import {AuthGuard} from './helper/auth-guard';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {SongComponent} from './songpage/song/song.component';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import {ListPlaylistComponent} from './playlist/list-playlist/list-playlist.component';
import {CreatesongComponent} from './createsong/createsong.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'profile/:{username}',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createsong/:{username}',
    component: CreatesongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createsinger/:{username}',
    component: CreatesongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'song/:id',
    component: SongComponent
  },
  {
    path: 'create-playlist',
    component: CreatePlaylistComponent
  }, {
    path: 'list-playlist',
    component: ListPlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

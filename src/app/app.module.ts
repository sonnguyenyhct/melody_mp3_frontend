import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {HomepageComponent} from './user/homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {SongComponent} from './songpage/song/song.component';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { ListPlaylistComponent } from './playlist/list-playlist/list-playlist.component';
import { UpdatePlaylistComponent } from './playlist/update-playlist/update-playlist.component';
import { DeletePlaylistComponent } from './playlist/delete-playlist/delete-playlist.component';
=======
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

>>>>>>> 6e733b7bc8db154bf3707cd20ae8c5e580e57e9b
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    ProfileComponent,
    SongComponent,
    CreatePlaylistComponent,
    ListPlaylistComponent,
    UpdatePlaylistComponent,
    DeletePlaylistComponent
=======
    ProfileComponent
>>>>>>> 6e733b7bc8db154bf3707cd20ae8c5e580e57e9b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

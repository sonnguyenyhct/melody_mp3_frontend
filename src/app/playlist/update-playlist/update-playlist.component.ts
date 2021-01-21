import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {AuthService} from '../../service/auth/auth.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {
  idPlaylist: number = -1;
  playlist: Playlist = {};
  currentUser: any;
  updateSuccess = false;
  selectedImage: any = null;
  imgSrc: string = '';
  username: any;

  constructor(private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage,
              private authService: AuthService,
              private  route: Router) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
    });
  }

  ngOnInit(): void {
    this.editSuccess = false;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idPlaylist = +paramMap.get('idPlaylist');
      console.log(paramMap.get('idPlaylist'));
    });
    this.playlistService.getPlayListById(this.idPlaylist).subscribe(playlist => {
      this.playlist = playlist;
    });
  }

  updatePlayList(idPlaylist: number) {
    this.playlistService.updatePlayList(this.currentUser.username, idPlaylist, this.playlist).subscribe(() => {
      this.editSuccess = true;
    });
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.selectedImage = null;
    }
  }

  submit() {
    const filePath = `${this.playlist.name}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(async url => {
          this.playlist.avatar = url;
          await this.updatePlayList(this.idPlaylist);
        });
      })
    ).subscribe();
  }

  cancel() {
    this.route.navigate(['/profile/' + this.currentUser.username]);
  }
}


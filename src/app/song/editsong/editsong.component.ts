import {Component, OnInit} from '@angular/core';
import {SongService} from '../../service/song/song.service';
import {song} from '../../model/song';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-editsong',
  templateUrl: './editsong.component.html',
  styleUrls: ['./editsong.component.css']
})
export class EditsongComponent implements OnInit {
  id: number = -1;
  song: song = {};
  currentUser: any;
  editSuccess = false;
  selectedImage: any = null;
  imgSrc: string = '';
  username: any;

  constructor(private storage: AngularFireStorage, private authService: AuthService, private songService: SongService, private activatedRoute: ActivatedRoute, private  route: Router) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
    });
  }

  ngOnInit(): void {
    this.editSuccess = false;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // this.id = +paramMap.get('id');
      console.log(paramMap.get('id'));
    });
    this.songService.getSongById(this.id).subscribe(song => {
      this.song = song;
    });
  }

  editSong(id: number) {
    this.songService.editSong(this.currentUser.username, id, this.song).subscribe(() => {
      this.editSuccess = true;
    });
  }

  cancel() {
    this.route.navigate(['/profile/' + this.currentUser.username]);
  }

  // tslint:disable-next-line:typedef
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.selectedImage = null;
    }
  }

  submit() { // Tai anh len firebase, lua duong dan vao db.
    const filePath = `${this.song.name}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(async url => { // Lay duong dan tren anh
          this.song.avatar = url;
          await this.editSong(this.id);
        });
      })
    ).subscribe();
  }

}

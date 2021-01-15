import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-playlist',
  templateUrl: './delete-playlist.component.html',
  styleUrls: ['./delete-playlist.component.css']
})
export class DeletePlaylistComponent implements OnInit {
  playlist: Playlist = {};
  id: number;

  constructor(private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.id = +paramMap.get('id');
      this.getPlayList(this.id);
    });
  }
  getPlayList(id){
    this.playlistService.getPlayListById(id).subscribe(value => {
      this.playlist = value;
    });
  }

  deletePlayList(id){
    this.playlistService.deletePlayListById(id).subscribe(() => {
        alert('Successfully');
        this.router.navigate(['/list-playlist']);
      },
      error => console.log(error));
  }

}

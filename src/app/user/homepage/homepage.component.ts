import {Component, OnInit} from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';

declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  showSongLike = true;
  showPlaylistLike = false;
  listPlaylistNew : Playlist[] = [];
  constructor(private playlistService: PlaylistService) {

  }

  ngOnInit(): void {
    this.playlistService.latestPlaylist().subscribe( listPlaylistNew => {
      this.listPlaylistNew = listPlaylistNew;
      $(document).ready(() => {
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          focusOnSelect: true
        });
      });
    })

  }
  songLike(){
    this.showSongLike = true;
    this.showPlaylistLike = false;
  }
  playlistLike(){
    this.showPlaylistLike = true;
    this.showSongLike = false;
  }
}

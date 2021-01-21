import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {Playlist} from '../../model/playlist';
import {userdetail} from '../../model/userdetail';

declare var $: any;

@Component({
  selector: '  app-playlist-most-like',
  templateUrl: './playlist-most-like.component.html',
  styleUrls: ['./playlist-most-like.component.css']
})
export class PlaylistMostLikeComponent implements OnInit {
  listPlaylistMostLike : Playlist[] = [];
  userdatas : userdetail[] = [];
  constructor(private playlistService : PlaylistService) {

  }

  ngOnInit(): void {
    this.playlistService.getPlayListMostLike().subscribe(  value => {
      this.listPlaylistMostLike = value;
      console.log(this.listPlaylistMostLike.length)
      $(document).ready(() => {
        $('.slider-for2').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav2'
        });
        $('.slider-nav2').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for2',
          dots: true,
          focusOnSelect: true
        });
      });
    })

  }
}

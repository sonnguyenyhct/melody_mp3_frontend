import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-playlist-most-like',
  templateUrl: './playlist-most-like.component.html',
  styleUrls: ['./playlist-most-like.component.css']
})
export class PlaylistMostLikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
      });
    });
  }

}

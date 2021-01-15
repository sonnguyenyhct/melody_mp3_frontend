import {Component, OnInit} from '@angular/core';
import {SongService} from '../../service/song/song.service';
import {Track} from 'ngx-audio-player';
import {singer} from '../../model/singer';
import {song} from '../../model/song';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  singleTrack: Track[] = [
    {
      link: '',
      title: ''
    }
  ];
  singers: singer[] = [];
  song: song = {
    name: '',
    file: '',
    singers: []
  };
  listTop10Songs: song[] = [];
  id: number;
  lyric = "Yêu nhau bấy lâu\n" +
    "Sao cô gái ây chỉ mang toàn những lời đớn đau\n" +
    "Bao nhiêu câu hát dưới mưa ngồi chờ em đón đưa\n" +
    "Sao nay yêu dấu ấy không còn nữa...\n" +
    "\n" +
    "Mùi hoa sữa bay\n" +
    "Tan trong ánh trăng gió lay nhẹ làm khóe mắt cay\n" +
    "Em mang tan nát gửi thêm tổn thương anh có hay\n" +
    "Yêu thương kia trôi đi vậy sao?\n" +
    "\n" +
    "[ĐK:]\n" +
    "Tình ta như áng mây trôi khi mùa đông vừa sang\n" +
    "Mang bao u tối ghé ngang cho lòng này vỡ tan\n" +
    "Vội lau nước mắt trên mi khi người đi\n" +
    "Khói thuốc mang hàng ngàn nỗi sầu\n" +
    "\n" +
    "Chôn sâu niềm đau qua từng tia nắng\n" +
    "Từng lời em nói mang bao vết cắt khi đã xa rời\n" +
    "Chịu thêm ngàn nỗi đau\n" +
    "Và ta lạc mất nhau\n" +
    "Theo từng ký ức phai màu\n" +
    "\n" +
    "[RAP:]\n" +
    "Em nào đâu hay\n" +
    "Con tim anh vỡ tan\n" +
    "Trong từng đêm vắng\n" +
    "Yêu thương xưa ghé ngang\n" +
    "Theo từng cơn mơ\n" +
    "Một người níu bước chân ai\n" +
    "\n" +
    "[ĐK:]\n" +
    "Tình ta như áng mây trôi khi mùa đông vừa sang\n" +
    "Mang bao u tối ghé ngang cho lòng này vỡ tan\n" +
    "Vội lau nước mắt trên mi khi người đi\n" +
    "Khói thuốc mang hàng ngàn nỗi sầu\n" +
    "\n" +
    "Chôn sâu niềm đau qua từng tia nắng\n" +
    "Từng lời em nói mang bao vết cắt khi đã xa rời\n" +
    "Chịu thêm ngàn nỗi đau\n" +
    "Và ta lạc mất nhau\n" +
    "Theo từng ký ức phai màu\n" +
    "\n" +
    "Tình ta như áng mây\n" +
    "*Theo gió bay\n" +
    "Còn gì ngoài nỗi đau\n" +
    "Khi lỡ xa nhau\n" +
    "\n" +
    "[ĐK:]\n" +
    "Tình ta như áng mây trôi khi mùa đông vừa sang\n" +
    "Mang bao u tối ghé ngang cho lòng này vỡ tan\n" +
    "Vội lau nước mắt trên mi khi người đi\n" +
    "Khói thuốc mang hàng ngàn nỗi sầu\n" +
    "\n" +
    "Chôn sâu niềm đau qua từng tia nắng\n" +
    "Từng lời em nói mang bao vết cắt khi đã xa rời\n" +
    "Chịu thêm ngàn nỗi đau\n" +
    "Và ta lạc mất nhau\n" +
    "Theo từng ký ức phai màu"

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getTrackById(this.id);
    });
  }

  ngOnInit(): void {
    this.getList10SongInTopViews();
  }

  // tslint:disable-next-line:typedef
  getTrackById(id) {
    this.songService.getSongById(id).subscribe(value => {
      this.singleTrack[0].title = value.name;
      this.singleTrack[0].link = value.file;
      this.singers = value.singers;
      this.song = value;
    });
  }

  // tslint:disable-next-line:typedef
  getList10SongInTopViews() {
    this.songService.get10SongInTopViews().subscribe(value => {
      this.listTop10Songs = value;
    });
  }
}

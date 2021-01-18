import {album} from './album';
import {User} from './user';
import {singer} from './singer';
import {Playlist} from './playlist';

export interface song {
  id?: number;
  name: string;
  file: string;
  creationTime?: any;
  numberOfView?: number;
  author?: string;
  avatar?: string;
  album?: album;
  user?: User;
  singers: singer[];
  playlists?: Playlist[];
}

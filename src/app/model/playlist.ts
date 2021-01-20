import {song} from './song';
import {User} from './user';

export interface Playlist{
  id?: number;
  name?: string;
  creationTime?: any;
  avatar?: string;
  user?: User;
  songs?: song[];
  avatar?: string;
  view?: number;
}

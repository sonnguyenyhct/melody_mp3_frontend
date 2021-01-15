import {song} from './song';
import {User} from './user';

export interface playlist{
  id?: number;
  name?: string;
  creationTime?: any;
  user?: User;
  songs?: song[];
}

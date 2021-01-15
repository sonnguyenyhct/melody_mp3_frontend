import {Userdetail} from './userdetail';
import {song} from './song';

export interface playlist{
  id?: number;
  name?: string;
  creationTime?: any;
  guest?: Userdetail;
  songs?: song[];
}

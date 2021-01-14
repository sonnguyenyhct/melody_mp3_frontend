import {guest} from './guest';
import {song} from './song';

export interface playlist{
  id?: number;
  name?: string;
  creationTime?: any;
  guest?: guest;
  songs?: song[];
}

import {song} from './song';

export interface singer {
  id?: number;
  name?: string;
  description?: string;
  songs?: song[];
}

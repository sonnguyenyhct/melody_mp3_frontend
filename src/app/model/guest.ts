import {User} from './user';

// tslint:disable-next-line:class-name
export interface guest{
  id?: number;
  name?: string;
  address?: string;
  email?: string;
  tel?: string;
  avatar?: string;
  user?: User;
}

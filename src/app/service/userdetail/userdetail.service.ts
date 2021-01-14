import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {guest} from '../../model/guest';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  constructor(private http: HttpClient) { }

  /*// tslint:disable-next-line:no-shadowed-variable
  createNewUserDetail( guest: guest): Observable<guest>{
    return this.http.post<guest>(API_URL + `/register`, guest);
  }*/
}

import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClientModule) {
  }

  getSongById(id: number): Observable<any>
}

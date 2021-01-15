import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {song} from '../../model/song';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }

  getSongById(id: number): Observable<song> {
    return this.http.get<song>(API_URL + `/song/${id}`);
  }

  get10SongInTopViews(): Observable<song[]> {
    return this.http.get<song[]>(API_URL + `/song/top10views`);
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) {}

  getAllPlayList(username: String): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/playlists/user/${username}`);
  }

  createNewPlayList(playlist: Playlist, username: String): Observable<Playlist> {
    return this.http.post<Playlist>(API_URL + `/playlists/user/${username}`, playlist);
  }

  updatePlayList(idPlaylist: number, playlist: Playlist, username: String): Observable<Playlist> {
    return this.http.put<Playlist>(API_URL + `/playlists/user/${username}/playlist/${idPlaylist}`, playlist);
  }

  getPlayListById(id: number): Observable<Playlist> {
    return this.http.get<Playlist>(API_URL + `/playlists/${id}`);
  }

  deletePlayListById(idPlaylist: number, username: String): Observable<Playlist> {
    return this.http.delete<Playlist>(API_URL + `/playlists/user/${username}/playlist/${idPlaylist}`);
  }
}

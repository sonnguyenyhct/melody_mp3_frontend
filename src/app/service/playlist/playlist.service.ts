import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';
import {song} from '../../model/song';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private http: HttpClient) {}
  getAllPlayList(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/playlists`);
  }
  createNewPlayList(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(API_URL + `/playlists`, playlist);
  }
  updatePlayList(id: number, playlist: Playlist): Observable<Playlist> {
    return this.http.put<Playlist>(API_URL + `/playlists/${id}`, playlist);
  }
  getPlayListById(id: number): Observable<Playlist> {
    return this.http.get<Playlist>(API_URL + `/playlists/${id}`);
  }
  deletePlayListById(id: number): Observable<Playlist> {
    return this.http.delete<Playlist>(API_URL + `/playlists/${id}`);
  }
  latestPlaylist(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/playlists/latestPlaylists`);
  }
  getTopView(): Observable<Playlist[]>{
    return this.http.get<Playlist[]>(API_URL + `/playlists/topView`);
  }
  addSongToPlaylist(idSong: number, idPlaylist: number): Observable<Playlist> {
    // @ts-ignore
    return this.http.post<Playlist>(API_URL + `/playlists/${idPlaylist}/songs/${idSong}`);
  }
  getPlayListMostLike(): Observable<Playlist[]>{
    return this.http.get<Playlist[]>(API_URL +`/playlists/topLike`)
  }
}

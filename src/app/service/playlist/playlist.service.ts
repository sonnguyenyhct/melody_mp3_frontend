import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';
import {song} from '../../model/song';
import {Track} from "ngx-audio-player";
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
  updatePlayList(username: String, id: number, playlist: Playlist): Observable<Playlist> {
    return this.http.put<Playlist>(API_URL + `/playlists/user/${username}/playlist/${id}`, playlist);
  }
  getPlayListById(id: number): Observable<Playlist> {
    return this.http.get<Playlist>(API_URL + `/playlists/${id}`);
  }
  deletePlayListById(id: number, username: String): Observable<Playlist> {
    return this.http.delete<Playlist>(API_URL + `/playlists/user/${username}/playlist/${id}`);
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
  getPlaylistByUsername(username: String): Observable<Playlist[]>{
    return this.http.get<Playlist[]>(API_URL + `/playlists/user/${username}`);
  }
  getPlayListMostLike(): Observable<Playlist[]>{
    return this.http.get<Playlist[]>(API_URL + `/playlists/topLike`);
  }
  getPlaylistLikeNumber(): Observable<number[]>{
    return this.http.get<number[]>(API_URL + `/playlists/likeNumber`);
  }
  getTrackPlaylist(id: number): Observable<Track[]> {
    return this.http.get<Track[]>(API_URL + `/playlists/tracks/${id}`);
  }
  findAllByNameContains(keyword: string): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/searchPlaylist/${keyword}`);
  }
}

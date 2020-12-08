import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';

@Injectable()
export class PlaylistsService {
  constructor(private airSonicApi: AirsonicApiService) {}

  private api = `${this.airSonicApi.apiServer}/rest`;
  private apiGetPlaylists = `${this.api}/getPlaylists`;
  private apiGetPlaylist = `${this.api}/getPlaylist`;
  private apiUpdatePlaylist = `${this.api}/updatePlaylist`;

  /**
   * @returns XML list of playlists
   */
  public getPlaylists(): Observable<SubSonicApi.Response> {
    const url = this.apiGetPlaylists + this.airSonicApi.apiAuthStr();
    return this.airSonicApi.callApiEndpoint(url);
  }

  /**
   * Return single playlist
   * @param id ID of playlist
   */
  public getPlaylist(id: string): Observable<SubSonicApi.Response> {
    const url =
      this.apiGetPlaylist + this.airSonicApi.apiAuthStr() + `&id=${id}`;
    return this.airSonicApi.callApiEndpoint(url);
  }

  // http://www.subsonic.org/pages/api.jsp#updatePlaylist
  public updatePlaylist(
    update: Partial<airsonic.PlaylistUpdateRequest>,
  ): Observable<SubSonicApi.Response> {
    const params = [];
    update.playlistId && params.push({playlistId: update.playlistId});
    update.name && params.push({name: update.name});
    update.public && params.push({public: update.public});
    update.comment && params.push({public: update.comment});

    if (update.songIdsToAdd.length) {
      update.songIdsToAdd.forEach(sid => params.push({songIdToAdd: sid}));
    }

    const url = this.airSonicApi.constructEndpointUrl('updatePlaylist', params);

    return this.airSonicApi.callApiEndpoint(url.href);
  }

  // TODO
  // public formatPlaylist(playlist: SubSonicApi.Playlist): airsonic.Playlist {

  // }
}

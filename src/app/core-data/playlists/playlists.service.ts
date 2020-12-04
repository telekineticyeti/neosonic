import {Injectable} from '@angular/core';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';

@Injectable()
export class PlaylistsService {
  constructor(private airSonicApi: AirsonicApiService) {}

  /**
   * @returns XML list of playlists
   */
  public getPlaylists() {
    const url = `${
      this.airSonicApi.env.airsonic_server
    }/rest/getPlaylists${this.airSonicApi.apiAuthStr()}`;
    return this.airSonicApi.callApiEndpoint(url);
  }

  /**
   * Return single playlist
   * @param id ID of playlist
   */
  public getPlaylist(id: string) {
    const url = `${
      this.airSonicApi.apiServer
    }/rest/getPlaylist${this.airSonicApi.apiAuthStr()}&id=${id}`;
    return this.airSonicApi.callApiEndpoint(url);
  }

  public isTruthy(val: string) {
    return val === 'true';
  }

  // TODO
  // public formatPlaylist(playlist: SubSonicApi.Playlist): airsonic.Playlist {

  // }
}

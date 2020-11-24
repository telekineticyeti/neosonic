import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';
import {State} from '../core-data.reducer';

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
}

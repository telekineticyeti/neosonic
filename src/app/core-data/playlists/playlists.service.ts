import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';

@Injectable()
export class PlaylistsService {
  constructor(private airSonicApi: AirsonicApiService) {}

  /**
   * @returns XML list of playlists
   */
  public getPlaylists(): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('getPlaylists', []).href;
    return this.airSonicApi.callApiEndpoint(url);
  }

  /**
   * Return single playlist
   * @param id ID of playlist
   */
  public getPlaylist(id: string): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('getPlaylist', [{id}])
      .href;
    return this.airSonicApi.callApiEndpoint(url);
  }

  // http://www.subsonic.org/pages/api.jsp#updatePlaylist
  public updatePlaylist(
    update: Partial<airsonic.PlaylistUpdateRequest>,
  ): Observable<SubSonicApi.Response> {
    const params = [];
    update.hasOwnProperty('playlistId') &&
      params.push({playlistId: update.playlistId});
    update.hasOwnProperty('name') && params.push({name: update.name});
    update.hasOwnProperty('public') && params.push({public: update.public});
    update.hasOwnProperty('comment') && params.push({comment: update.comment});

    if (update.songIdsToAdd) {
      update.songIdsToAdd.forEach(sid => params.push({songIdToAdd: sid}));
    }

    if (update.songIndexesToRemove) {
      update.songIndexesToRemove.forEach(sid =>
        params.push({songIndexToRemove: sid}),
      );
    }

    const url = this.airSonicApi.constructEndpointUrl('updatePlaylist', params)
      .href;

    return this.airSonicApi.callApiEndpoint(url);
  }

  public deletePlaylist(id: string): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('deletePlaylist', [{id}])
      .href;
    return this.airSonicApi.callApiEndpoint(url);
  }

  public createPlaylist(
    name: string,
    comment?: string,
  ): Observable<SubSonicApi.Response> {
    const params = [];
    params.push({name});
    comment && params.push({comment});

    const url = this.airSonicApi.constructEndpointUrl('createPlaylist', params)
      .href;
    return this.airSonicApi.callApiEndpoint(url);
  }
}

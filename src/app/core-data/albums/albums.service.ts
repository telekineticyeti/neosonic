import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';

@Injectable()
export class AlbumsService {
  constructor(private airSonicApi: AirsonicApiService) {}

  public getAlbum(id: string): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('getAlbum', [{id}]).href;

    return this.airSonicApi.callApiEndpoint(url);
  }

  /**
   * @returns XML list of albums. Uses the /getAlbumList2 subsonic API endpoint
   */
  public getAlbumsList(
    type: airsonic.getAlbumTypes,
    options?: airsonic.getAlbumOptions,
  ): Observable<SubSonicApi.Response> {
    const params = [];

    params.push({type});

    if (options) {
      for (const [key, value] of Object.entries(options)) {
        params.push({[key]: value});
      }
    }

    const url = this.airSonicApi.constructEndpointUrl('getAlbumList2', params)
      .href;

    return this.airSonicApi.callApiEndpoint(url);
  }

  /**
   * Retrieve cover art for given album ID
   * @param id album ID
   * @param scale size of the coverart. Default is 300.
   */
  public getCoverArt(id: string, scale: number = 300): Observable<string> {
    const size = scale.toString();
    return of(
      this.airSonicApi.constructEndpointUrl('getCoverArt', [{id}, {size}]).href,
    );
  }

  // http://www.subsonic.org/pages/api.jsp#updatePlaylist
  // public updatePlaylist(
  //   update: Partial<airsonic.PlaylistUpdateRequest>,
  // ): Observable<SubSonicApi.Response> {
  //   const params = [];
  //   update.playlistId && params.push({playlistId: update.playlistId});
  //   update.name && params.push({name: update.name});
  //   update.public && params.push({public: update.public});
  //   update.comment && params.push({public: update.comment});

  //   if (update.songIdsToAdd.length) {
  //     update.songIdsToAdd.forEach(sid => params.push({songIdToAdd: sid}));
  //   }

  //   const url = this.airSonicApi.constructEndpointUrl('updatePlaylist', params);

  //   return this.airSonicApi.callApiEndpoint(url.href);
  // }
}

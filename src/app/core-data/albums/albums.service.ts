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
    type: neosonic.getAlbumTypes,
    options?: neosonic.getAlbumOptions,
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
}

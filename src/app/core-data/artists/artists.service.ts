import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';

@Injectable()
export class ArtistService {
  constructor(private airSonicApi: AirsonicApiService) {}

  public getArtist(id: string): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('getArtist', [{id}]).href;
    return this.airSonicApi.callApiEndpoint(url);
  }

  public getArtistInfo(id: string): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('getArtistInfo2', [{id}])
      .href;
    return this.airSonicApi.callApiEndpoint(url);
  }
}

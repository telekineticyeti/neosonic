import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';

@Injectable()
export class SearchService {
  constructor(private airSonicApi: AirsonicApiService) {}

  public search(query: string): Observable<SubSonicApi.Response> {
    const url = this.airSonicApi.constructEndpointUrl('search3', [{query}])
      .href;
    return this.airSonicApi.callApiEndpoint(url);
  }
}

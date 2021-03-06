import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Md5} from 'ts-md5/dist/md5';
import {parseString} from 'xml2js';
import {map, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {UserFacade} from '../core-data/user/user.facade';

@Injectable({
  providedIn: 'root',
})
export class AirsonicApiService {
  constructor(private http: HttpClient, private userFacade: UserFacade) {}

  get credentials(): neosonic.Persist['user'] {
    return this.userFacade.user$.getValue();
  }

  public env = env;

  public callApiEndpoint(url: string): Observable<SubSonicApi.Response> {
    const httpOptions = {
      responseType: 'text' as 'text',
    };

    return this.http.get(url, httpOptions).pipe(
      map(res => {
        let parsedResult;
        parseString(res, {explicitArray: true}, (error, result) => {
          if (!error) {
            parsedResult = result;
          }
        });

        return parsedResult as SubSonicApi.Response;
      }),
      catchError(error => this.errorHandler(error)),
    );
  }

  public errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  /**
   * @returns string of parameters required for API calls
   */
  public apiAuthStr(): string {
    if (!this.userFacade.loggedIn$.getValue()) return;
    const salt = this.createSaltStr(6);
    const hash = Md5.hashStr(this.credentials.password + salt);
    return `?u=${this.credentials.username}&t=${hash}&s=${salt}&c=${env.appName}&v=${env.airsonicApiVersion}`;
  }

  public constructEndpointUrl(
    endpoint: string,
    params: {
      [key: string]: string;
    }[],
  ): URL {
    const url = new URL(
      `${this.credentials.server}/rest/${endpoint}${this.apiAuthStr()}`,
    );

    params.forEach(p =>
      Object.entries(p).forEach(o => url.searchParams.append(o[0], o[1])),
    );

    return url;
  }

  /**
   * @returns a randomised string of characters for use as a salt
   */
  private createSaltStr(length: number = 6): string {
    let result = '';
    const characterSet =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characterSetLength = characterSet.length;
    for (let i = 0; i < length; i++) {
      result += characterSet.charAt(
        Math.floor(Math.random() * characterSetLength),
      );
    }
    return result;
  }
}

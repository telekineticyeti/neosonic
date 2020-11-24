import {Injectable, ErrorHandler} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Md5} from 'ts-md5/dist/md5';
import {parseString} from 'xml2js';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirsonicApiService {
  constructor(private http: HttpClient) {}

  public env = env;

  public callApiEndpoint(url: string) {
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

        return parsedResult as airsonic.SubSonicApiResponse;
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
    const salt = this.createSaltStr(6);
    const hash = Md5.hashStr(env.airsonic_password + salt);
    return `?u=${env.airsonic_username}&t=${hash}&s=${salt}&c=${env.appName}&v=${env.airsonicApiVersion}`;
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

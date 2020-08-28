import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import { parseString } from 'xml2js';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirsonicApiService {
  constructor(private http: HttpClient) {}

  /**
   * @returns XML list of playlists
   */
  public getPlaylists() {
    const url = `${env.airsonic_server}/rest/getPlaylists${this.apiAuthStr()}`;
    console.log(url);
    this.callApiEndpoint(url).subscribe((data) => console.log(data));
  }

  private callApiEndpoint(url: string) {
    const httpOptions = {
      responseType: 'text' as 'text',
    };
    return this.http.get(url, httpOptions).pipe(
      map((res) => {
        parseString(res, { explicitArray: true }, (error, result) => {
          if (error) {
            // throw new Error(error);
            console.log(error);
          } else {
            console.log(result);
            return result;
          }
        });
        // return res;
      }),
      catchError((error) => this.errorHandler(error))
    );
  }

  private errorHandler(error) {
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
  private apiAuthStr(): string {
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
        Math.floor(Math.random() * characterSetLength)
      );
    }
    return result;
  }
}

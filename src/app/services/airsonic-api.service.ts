import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root',
})
export class AirsonicApiService {
  /**
   * @returns string of parameters required for API calls
   */
  public authenticationString(): string {
    const salt = this.makeSalt(6);
    const hash = Md5.hashStr(env.airsonic_password + salt);
    return `?u=${env.airsonic_username}&t=${hash}&s=${salt}&c=${env.appName}&v=${env.airsonicApiVersion}`;
  }

  /**
   * @returns XML list of playlists
   */
  public getPlaylists() {
    console.log(
      `${env.airsonic_server}/rest/getPlaylists${this.authenticationString()}`
    );
  }

  /**
   * @returns a randomised string of characters for use as a salt
   */
  private makeSalt(length: number = 6) {
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

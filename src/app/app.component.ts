import { Component } from '@angular/core';
import { AirsonicApiService } from './services/airsonic-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airsonic-client';
  constructor(private airsonicApi: AirsonicApiService) {
    this.airsonicApi.getPlaylists();
  }

  /**
   * TODO:
   * - Find an XML parser thing
   * - Set up state management
   */
}

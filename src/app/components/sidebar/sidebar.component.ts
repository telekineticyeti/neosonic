import {Component} from '@angular/core';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public playlistsFacade: PlaylistsFacade) {}
}

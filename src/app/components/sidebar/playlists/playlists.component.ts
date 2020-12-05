import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'sidebar-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() playlists: airsonic.Playlist[];

  ngOnInit(): void {}

  public openPlaylist(id: string[]): void {
    this.router.navigate(['playlists', id]);
  }
}

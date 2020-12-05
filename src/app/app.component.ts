import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlaylistsFacade} from './core-data/playlists/playlists.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private playlistsFacade: PlaylistsFacade,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    // TODO Add to eventual initializer
    this.playlistsFacade.getAllPlaylists();
  }

  public ngAfterViewInit(): void {
    // TODO: Hacky?
    this.router.navigateByUrl(window.location.pathname);
  }
}

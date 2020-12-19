import {Component, OnInit} from '@angular/core';
import {AlbumsFacade} from 'src/app/core-data/albums/albums.facade';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  constructor(public albumsFacade: AlbumsFacade) {}

  public ngOnInit(): void {
    this.albumsFacade.getAlbumList('newest', {size: 22});
  }
}

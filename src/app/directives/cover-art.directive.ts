import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {take} from 'rxjs/operators';
import {AlbumsService} from '../core-data/albums/albums.service';

@Directive({
  selector: '[coverArt]',
})
export class CoverArtDirective {
  constructor(
    private albumService: AlbumsService,
    private node: ElementRef<any>,
  ) {}

  @Input() public coverArt: string;
  @HostBinding('attr.size') @Input() public size: number = 200;

  ngOnChanges() {
    this.albumService
      .getCoverArt(this.coverArt, this.size)
      .pipe(take(1))
      .subscribe(url => {
        this.node.nativeElement.setAttribute('src', url);
      });
  }
}

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtistViewerComponent} from './artist-viewer.component';

describe('ArtistViewerComponent', () => {
  let component: ArtistViewerComponent;
  let fixture: ComponentFixture<ArtistViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistViewerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ArtistsListerComponent} from './artists-lister.component';

describe('ArtistsListerComponent', () => {
  let component: ArtistsListerComponent;
  let fixture: ComponentFixture<ArtistsListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistsListerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

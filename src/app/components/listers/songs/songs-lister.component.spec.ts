import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SongsListerComponent} from './songs-lister.component';

describe('SongsListerComponent', () => {
  let component: SongsListerComponent;
  let fixture: ComponentFixture<SongsListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongsListerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

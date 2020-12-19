import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AlbumsListerComponent} from './albums-lister.component';

describe('AlbumsListerComponent', () => {
  let component: AlbumsListerComponent;
  let fixture: ComponentFixture<AlbumsListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsListerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

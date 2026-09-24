import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilesInternetComponent } from './files-internet-component';

describe('FilesInternetComponent', () => {
  let component: FilesInternetComponent;
  let fixture: ComponentFixture<FilesInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilesInternetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilesInternetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

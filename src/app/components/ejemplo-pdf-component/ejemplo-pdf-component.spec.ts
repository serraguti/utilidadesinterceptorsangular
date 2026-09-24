import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploPdfComponent } from './ejemplo-pdf-component';

describe('EjemploPdfComponent', () => {
  let component: EjemploPdfComponent;
  let fixture: ComponentFixture<EjemploPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploPdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploPdfComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

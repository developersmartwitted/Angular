import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeInputsComponent } from './prime-inputs.component';

describe('PrimeInputsComponent', () => {
  let component: PrimeInputsComponent;
  let fixture: ComponentFixture<PrimeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeInputsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

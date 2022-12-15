import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAndToastsComponent } from './buttons-and-toasts.component';

describe('ButtonsAndToastsComponent', () => {
  let component: ButtonsAndToastsComponent;
  let fixture: ComponentFixture<ButtonsAndToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsAndToastsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAndToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

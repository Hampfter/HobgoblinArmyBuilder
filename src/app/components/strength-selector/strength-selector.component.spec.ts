import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthSelectorComponent } from './strength-selector.component';

describe('StrengthSelectorComponent', () => {
  let component: StrengthSelectorComponent;
  let fixture: ComponentFixture<StrengthSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

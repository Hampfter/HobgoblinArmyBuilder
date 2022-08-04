import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmySelectorComponent } from './army-selector.component';

describe('ArmySelectorComponent', () => {
  let component: ArmySelectorComponent;
  let fixture: ComponentFixture<ArmySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

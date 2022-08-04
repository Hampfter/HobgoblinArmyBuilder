import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessSelectorComponent } from './weakness-selector.component';

describe('WeaknessSelectorComponent', () => {
  let component: WeaknessSelectorComponent;
  let fixture: ComponentFixture<WeaknessSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaknessSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaknessSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

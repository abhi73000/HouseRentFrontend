import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenatComponent } from './tenat.component';

describe('TenatComponent', () => {
  let component: TenatComponent;
  let fixture: ComponentFixture<TenatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenatComponent]
    });
    fixture = TestBed.createComponent(TenatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

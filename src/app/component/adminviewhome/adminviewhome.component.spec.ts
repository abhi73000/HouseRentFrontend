import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewhomeComponent } from './adminviewhome.component';

describe('AdminviewhomeComponent', () => {
  let component: AdminviewhomeComponent;
  let fixture: ComponentFixture<AdminviewhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminviewhomeComponent]
    });
    fixture = TestBed.createComponent(AdminviewhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

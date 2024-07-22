import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewhomesComponent } from './adminviewhomes.component';

describe('AdminviewhomesComponent', () => {
  let component: AdminviewhomesComponent;
  let fixture: ComponentFixture<AdminviewhomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminviewhomesComponent]
    });
    fixture = TestBed.createComponent(AdminviewhomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

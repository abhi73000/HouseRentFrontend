import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantHomeComponent } from './tenant-home.component';

describe('TenantHomeComponent', () => {
  let component: TenantHomeComponent;
  let fixture: ComponentFixture<TenantHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantHomeComponent]
    });
    fixture = TestBed.createComponent(TenantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

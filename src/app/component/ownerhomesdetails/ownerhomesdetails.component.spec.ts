import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhomesdetailsComponent } from './ownerhomesdetails.component';

describe('OwnerhomesdetailsComponent', () => {
  let component: OwnerhomesdetailsComponent;
  let fixture: ComponentFixture<OwnerhomesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerhomesdetailsComponent]
    });
    fixture = TestBed.createComponent(OwnerhomesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersidebarComponent } from './ownersidebar.component';

describe('OwnersidebarComponent', () => {
  let component: OwnersidebarComponent;
  let fixture: ComponentFixture<OwnersidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersidebarComponent]
    });
    fixture = TestBed.createComponent(OwnersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

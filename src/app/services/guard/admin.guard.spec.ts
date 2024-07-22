import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let adminGuard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard] // Add the AdminGuard to the providers
    });
    adminGuard = TestBed.inject(AdminGuard); // Inject the AdminGuard
  });

  it('should be created', () => {
    expect(adminGuard).toBeTruthy();
  });

  // Add more test cases for your AdminGuard if needed
});

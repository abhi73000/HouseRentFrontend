import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OwnerGuard } from './owner.guard';

describe('OwnerGuard', () => {
  let ownerGuard: OwnerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerGuard, { provide: Router, useClass: RouterStub }] // Replace RouterStub with your custom Router mock if needed
    });

    ownerGuard = TestBed.inject(OwnerGuard);
  });

  it('should be created', () => {
    expect(ownerGuard).toBeTruthy();
  });

  it('should return true when canActivate is called', () => {
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;
    const canActivateResult = ownerGuard.canActivate(routeSnapshot, stateSnapshot);

    expect(canActivateResult).toBe(true);
    // Add more assertions as needed to test the guard's behavior
  });
});

// Create a RouterStub class to mock the Router dependency if you don't have a custom Router mock
class RouterStub {
  navigateByUrl(url: string): void {
    // Implement the behavior you need for your tests
  }
}

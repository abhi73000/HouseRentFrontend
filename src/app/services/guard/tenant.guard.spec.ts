import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TenantGuard } from './tenant.guard';

describe('TenantGuard', () => {
  let tenantGuard: TenantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenantGuard, { provide: Router, useClass: RouterStub }] // Replace RouterStub with your custom Router mock if needed
    });

    tenantGuard = TestBed.inject(TenantGuard);
  });

  it('should be created', () => {
    expect(tenantGuard).toBeTruthy();
  });

  it('should return true when canActivate is called', () => {
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;
    const canActivateResult = tenantGuard.canActivate(routeSnapshot, stateSnapshot);

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

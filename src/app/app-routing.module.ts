import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DetailComponent } from './component/detail/detail.component';
import { BookingComponent } from './component/booking/booking.component';
import { AdminComponent } from './component/admin/admin.component';
import { OwnerComponent } from './component/owner/owner.component';
import { TenatComponent } from './component/tenat/tenat.component';
import { AddpropertyComponent } from './component/addproperty/addproperty.component';
import { AdminGuard } from './services/guard/admin.guard';
import { OwnerGuard } from './services/guard/owner.guard';
import { TenantGuard } from './services/guard/tenant.guard';
import { ProfileComponent } from './component/profile/profile.component';
import { OwnerlistComponent } from './component/ownerlist/ownerlist.component';
import { TenantlistComponent } from './component/tenantlist/tenantlist.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { OwnerHomeComponent } from './component/owner-home/owner-home.component';
import { UpdateUserComponent } from './component/profile/update-user/update-user.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { TenantHomeComponent } from './component/tenant-home/tenant-home.component';
import { OwnerhomesdetailsComponent } from './component/ownerhomesdetails/ownerhomesdetails.component';
import { UpdatePropertyComponent } from './component/update-property/update-property.component';
import { AdminviewhomeComponent } from './component/adminviewhome/adminviewhome.component';
import { AdminviewhomesComponent } from './component/adminviewhomes/adminviewhomes.component';
import { ViewrequestsComponent } from './component/viewrequests/viewrequests.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  {
    path: 'details/:propertyId',
    component: DetailComponent
  },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail', component: DetailComponent },

  { path: 'navbar', component: NavbarComponent },
  { path: 'updateUser', component: UpdateUserComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },
  // { path: 'profile', component: ProfileComponent },
  // {path: 'userupdate', component: UserUpdateComponent}
  // { path: 'admin', component: AdminComponent, pathMatch: "full"},
  // { path: 'owner', component: OwnerComponent, pathMatch: "full"},
  // { path: 'tenant', component: TenatComponent, pathMatch: "full"},

  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: HomeComponent,
  //     },
  //     {
  //       path: 'details',
  //       component: DetailComponent
  //     }
  //   ],
  // },

  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'userupdate/:userId',
        component: UserUpdateComponent,
      },
      {
        path: 'ownerlist',
        component: OwnerlistComponent
      },
      {
        path: 'tenantlist',
        component: TenantlistComponent
      },
      {
        path: 'adminviewuserhome/:userId',
        component: AdminviewhomeComponent
      },
      {
        path: 'adminviewhomes',
        component: AdminviewhomesComponent

      }
    ]
  },

  {
    path: 'owner', component: OwnerComponent, canActivate: [OwnerGuard],
    children: [
      {
        path: '',
        component: OwnerHomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'userupdate/:userId',
        component: UserUpdateComponent,
      },
      {
        path: 'addproperty',
        component: AddpropertyComponent
      },
      {
        path: 'homedetails',
        component: OwnerhomesdetailsComponent
      },
      {
        path: 'updateProperty/:propertyId',
        component: UpdatePropertyComponent
      },
      {
        path: 'viewrequest',
        component: ViewrequestsComponent
      }
    ]
  },
  {
    path: 'tenant', component: TenatComponent, canActivate: [TenantGuard],
    children: [
      {
        path: '',
        component: TenantHomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'userupdate/:userId',
        component: UserUpdateComponent,
      },
      {
        path: 'booking/:propertyId',
        component: BookingComponent
      }
    ]

  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

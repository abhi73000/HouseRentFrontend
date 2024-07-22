import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetailComponent } from './component/detail/detail.component';
import { BookingComponent } from './component/booking/booking.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './component/admin/admin.component';
import { OwnerComponent } from './component/owner/owner.component';
import { TenatComponent } from './component/tenat/tenat.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddpropertyComponent } from './component/addproperty/addproperty.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { AuthInterceptorProvider } from './services/auth.interceptor';
import { OwnerlistComponent } from './component/ownerlist/ownerlist.component';
import { TenantlistComponent } from './component/tenantlist/tenantlist.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { OwnerHomeComponent } from './component/owner-home/owner-home.component';
import { OwnersidebarComponent } from './component/ownersidebar/ownersidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateUserComponent } from './component/profile/update-user/update-user.component';
import { FooterComponent } from "./footer/footer.component";
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { TenantHomeComponent } from './component/tenant-home/tenant-home.component';
import { TenantSidebarComponent } from './component/tenant-sidebar/tenant-sidebar.component';
import { OwnerhomesdetailsComponent } from './component/ownerhomesdetails/ownerhomesdetails.component';
import { UpdatePropertyComponent } from './component/update-property/update-property.component';
import { AdminviewhomeComponent } from './component/adminviewhome/adminviewhome.component';
import { AdminviewhomesComponent } from './component/adminviewhomes/adminviewhomes.component';
import { ViewrequestsComponent } from './component/viewrequests/viewrequests.component';


library.add(faSearch, faBars, faTimes);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    DetailComponent,
    BookingComponent,
    AdminComponent,
    OwnerComponent,
    TenatComponent,
    AddpropertyComponent,
    OwnerlistComponent,
    TenantlistComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    AdminHomeComponent,
    OwnerHomeComponent,
    OwnersidebarComponent,
    UpdateUserComponent,
    FooterComponent,
    UserUpdateComponent,
    AboutusComponent,
    ContactusComponent,
    TenantHomeComponent,
    TenantSidebarComponent,
    OwnerhomesdetailsComponent,
    UpdatePropertyComponent,
    AdminviewhomeComponent,
    AdminviewhomesComponent,
    ViewrequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    NgIf,
    ReactiveFormsModule,
    MatMenuModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

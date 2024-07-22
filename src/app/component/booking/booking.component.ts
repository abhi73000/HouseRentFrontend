import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import { LoginService } from 'src/app/services/login.service';
import { RentrequestserviceService } from 'src/app/services/rentrequestservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  propertyData = {
    propertyId: '',
    propertyName: '',
    photo: '',
    price: '',
    status: '',
    area: '',
    bhkType: '',
    furnishedType: '',
    location: {
      locationId: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    },
    user: {
      email: '',
      name: '',
      password: '',
      phone: '',
      role: '',
      userId: '',
      username: '',
    }
  }
  currentUser = {
    email: '',
    name: '',
    password: '',
    phone: '',
    role: '',
    userId: '',
    username: '',
  }


  constructor(private activeRoute: ActivatedRoute, private listPropertyService: ListpropertyService,
    private loginService: LoginService, private rentRequestService: RentrequestserviceService) { }

  ngOnInit(): void {
    this.getOwnerDetalis();
    this.getCurrentUser();
  }

  public getOwnerDetalis() {

    let propertyId = this.activeRoute.snapshot.paramMap.get('propertyId');
    console.log(propertyId);
    propertyId && this.listPropertyService.getPropertyById(propertyId).subscribe((data: any) => {

      console.warn(data);
      this.propertyData = {
        propertyId: data.propertyId,
        propertyName: data.propertyName,
        photo: data.photo,
        price: data.price,
        status: data.status,
        area: data.area,
        bhkType: data.bhkType,
        furnishedType: data.furnishedType,
        location: {
          locationId: data.location.locationId,
          address: data.location.address,
          city: data.location.city,
          state: data.location.state,
          country: data.location.country,
          pincode: data.location.pincode,
        },
        user: {
          email: data.user.email,
          name: data.user.name,
          password: data.user.password,
          phone: data.user.phone,
          role: data.user.role,
          userId: data.user.userId,
          username: data.user.username,
        }
      }
      console.log(this.propertyData.user.userId);
    });
  }

  public getCurrentUser() {
    this.loginService.getCurrentUser().subscribe(
      (data: any) => {
        this.currentUser = {
          email: data.email,
          name: data.name,
          password: data.password,
          phone: data.phone,
          role: data.role,
          userId: data.userId,
          username: data.username,
        }
        // this.currentUser = data;
        console.log("this is userId:  " + data.userId);
        console.warn(this.currentUser.userId);
      },
      (error) => {
        alert('Error fetching user data');
      }
    );
  }


  isRequested = false;
  // currentUserID = this.currentUser.userId; // Replace with your actual user ID
  request = 'requested';

  handleRequest() {
    if (!this.isRequested) {
      // Create an object to send the data
      const requestData = {
        user: this.currentUser,
        request: this.request,
        property: this.propertyData
      };
      this.rentRequestService.createRequest(requestData).subscribe((data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Request successfully send !!',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(data);
      }, (error) => {
        console.log(error);
      })
      console.log('Sending request data:', requestData);
      // Set isRequested to true to disable the button
      this.isRequested = true;
    }
  }
}

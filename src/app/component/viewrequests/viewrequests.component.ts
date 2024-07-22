import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RentrequestserviceService } from 'src/app/services/rentrequestservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {
  requests: any;
  ownerId: any;

  currentUser = {
    email: '',
    name: '',
    password: '',
    phone: '',
    role: '',
    userId: '',
    username: '',
  };

  constructor(
    private rentrequestserviceService: RentrequestserviceService,
    private loginService: LoginService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
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
        };
        this.ownerId = data.userId;
        console.log("this is userId:  " + data.userId);
        console.log(this.currentUser)
        console.warn(this.ownerId);

        // Now that you have the ownerId, fetch the requests
        this.getAllRequests(this.ownerId);
      },
      (error) => {
        alert('Error fetching user data');
      }
    );
  }

  getFile(blob: any) {
    let objectURL = 'data:image/jpeg;base64,' + blob;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  public getAllRequests(ownerId: any) {
    this.rentrequestserviceService.getAllRequestByOwnerId(ownerId).subscribe(
      (data: any) => {
        console.log(data);
        this.requests = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteRequest(userId: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rentrequestserviceService.deleteRequest(userId).subscribe((result) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            window.location.reload();
          });
        });
      }
    });
  }
}

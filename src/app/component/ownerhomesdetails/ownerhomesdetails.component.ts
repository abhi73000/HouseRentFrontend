import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ownerhomesdetails',
  templateUrl: './ownerhomesdetails.component.html',
  styleUrls: ['./ownerhomesdetails.component.css']
})
export class OwnerhomesdetailsComponent implements OnInit {

  showListespropert: any[] = [];
  constructor(private loginService: LoginService, private listPropertyService: ListpropertyService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      (data: any) => {
        console.log("this is userId:  " + data.userId);
        console.log(data);
        console.log('role   ' + data.role)

        this.listPropertyService.getPropertyByUserId(data.userId).subscribe(
          (result: any) => {
            this.showListespropert = result;
            console.log('Data:', data.propertyName);
            console.log(result);
            console.log(result.propertyId);

          })
      },
      (error) => {
        alert('Error fetching Property Data');
      }
    );
  }

  getFile(blob: any) {
    let objectURL = 'data:image/jpeg;base64,' + blob;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  deleteProperty(propertyId: any) {
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
        this.listPropertyService.deletePropertyByPropertyId(propertyId).subscribe((result) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            window.location.reload();
          })
        });
    }})
  }

}

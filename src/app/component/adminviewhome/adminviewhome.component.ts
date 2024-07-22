import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminviewhome',
  templateUrl: './adminviewhome.component.html',
  styleUrls: ['./adminviewhome.component.css']
})
export class AdminviewhomeComponent implements OnInit {
  uId = 0;
  showListespropert: any[] = [];
  constructor(private listPropertyService: ListpropertyService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.uId = this.route.snapshot.params['userId'];
    console.log(this.uId);

    this.listPropertyService.getPropertyByUserId(this.uId).subscribe(
      (result: any) => {
        console.log(result);
        this.showListespropert = result;
        console.log('Data:', result.propertyName);
        // console.log(result);
        console.log(result.propertyId);

      }
      , (error) => {
        alert('Error fetching Property Data');

      });

  }

  getFile(blob: any) {
    let objectURL = 'data:image/jpeg;base64,' + blob;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  // viewProperty(userId: any) {

  // }
  deleteProperty(propertyId: any) {

    this.listPropertyService.deletePropertyByPropertyId(propertyId).subscribe((result) => {
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
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            window.location.reload();
          })
        }
      })
    }
    );
  }
}

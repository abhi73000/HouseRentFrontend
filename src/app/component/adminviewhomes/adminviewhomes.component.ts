import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminviewhomes',
  templateUrl: './adminviewhomes.component.html',
  styleUrls: ['./adminviewhomes.component.css']
})
export class AdminviewhomesComponent implements OnInit {
  showListespropert: any[] = []
  propertyId=0;

  constructor(private listPropertyService: ListpropertyService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.listPropertyService.getAllTypeProperty().subscribe(
      (result: any) => {
        this.showListespropert = result;
        console.log(result);
        // this.propertyId=result.propertyId;
        console.log(result.propertyId);

      }, (error) => {
        console.log(error);
      })

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

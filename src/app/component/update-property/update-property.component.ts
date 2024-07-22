import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ListpropertyService } from "src/app/services/listproperty.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {


  constructor(private route: ActivatedRoute, private listPropertyService: ListpropertyService,
    private router:Router) { }
  propertyDataLoaded: boolean = false;

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

  ngOnInit(): void {
    let pId = this.route.snapshot.paramMap.get('propertyId');
    console.log(pId);
    pId && this.listPropertyService.getPropertyById(pId).subscribe((data: any) => {

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
      console.log(this.propertyData);
      this.propertyDataLoaded = true; // Data is loaded

    });
  }


  updateProperty() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.listPropertyService.updateProperty(this.propertyData).subscribe((data: any) => {
          Swal.fire('Saved!', '', 'success');
          this.router.navigate(['/owner/homedetails'])

        }, (error) =>
          console.log(error));
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})

export class AddpropertyComponent implements OnInit {

  public propertyDetails = {
    propertyName: '',
    bhkType: '',
    price: '',
    area: '',
    furnishedType: '',
    country: '',
    state: '',
    city: '',
    address: '',
    pincode: '',
    photo2: '',
    status: ''
  }
  photo2!: File;

  constructor(private formBilder: FormBuilder, private listpropertyService: ListpropertyService,
    private router: Router) { }

  addProperty = new FormGroup({
    propertyTypeFormControl: new FormControl('', Validators.required),
    bhkFromControl: new FormControl('', Validators.required),
    furnishedFormControl: new FormControl('', Validators.required),
    rentFromControl: new FormControl('', Validators.required),
    areaFormControl: new FormControl('', [Validators.required]),
    countryFormControl: new FormControl('', [Validators.required, Validators.pattern("[A-Z][a-z]*")]),
    cityFormControl: new FormControl('', [Validators.required, Validators.pattern("[A-Z][a-z]*")]),
    stateFormControl: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Z][A-Za-z\s]*$")]),
    locationFormControl: new FormControl('', [Validators.required]),
    pinFromControl: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    imageFromControl: new FormControl('', Validators.required),
    statusFormControl: new FormControl('', Validators.required),
  });

  get validatePropertyType() {
    return this.addProperty.get("propertyTypeFormControl");
  }

  get validateBhk() {
    return this.addProperty.get("bhkFromControl");
  }
  get validatefunished() {
    return this.addProperty.get("furnishedFormControl");
  }

  get validateRent() {
    return this.addProperty.get("rentFromControl");
  }
  get validateArea() {
    return this.addProperty.get("areaFormControl");
  }

  get validateCountry(): FormControl {
    return this.addProperty.get("countryFormControl") as FormControl;
  }
  get validateState() {
    return this.addProperty.get("stateFormControl");
  }
  get validateCity() {
    return this.addProperty.get("cityFormControl");
  }
  get validateLocation() {
    return this.addProperty.get("locationFormControl");
  }
  get validatePin() {
    return this.addProperty.get("pinFromControl");
  }
  get validateImage() {
    return this.addProperty.get("imageFromControl");
  }
  get validatestatus() {
    return this.addProperty.get("statusFormControl");
  }

  ngOnInit(): void {

  }

  // uplodeImage(event: any) {
  //   // debugger;
  //   const file = event.currentTarget.files[0];
  // }


  // Method to filter out non-numeric characters from the input value
  filterNonNumeric(event: any): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.replace(/[^0-9]/g, '');
    input.value = newValue;
  }
  onChange(event: any) {
    this.propertyDetails.photo2 = event.target.files[0];
  }
  submitDetails() {
    console.log(this.propertyDetails);
    let form: FormData = new FormData();
    form.append("propertyName", this.propertyDetails.propertyName);
    form.append("photo2", this.propertyDetails.photo2);
    form.append("bhkType", this.propertyDetails.bhkType);
    form.append("price", this.propertyDetails.price);
    form.append("area", this.propertyDetails.area);
    form.append("furnishedType", this.propertyDetails.furnishedType);
    form.append("country", this.propertyDetails.country);
    form.append("state", this.propertyDetails.state);
    form.append("city", this.propertyDetails.city);
    form.append("address", this.propertyDetails.address);
    form.append("pincode", this.propertyDetails.pincode);
    form.append("status", this.propertyDetails.status);

    this.listpropertyService.listProperty(form).subscribe((data: any) => {
      console.log(data);
      Swal.fire('Successfully done',
        'Property Successfully Listed !!',
        'success').then(() => {
          this.router.navigate(['/home']);

        });

    },
      (error) => {
        // failed
        console.log(error);
        //alert("somthing went wrong");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Somthing went wrong !! Try Once Again',
        })
      });
  }
}
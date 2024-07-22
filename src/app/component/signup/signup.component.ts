import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // creating a object to collect the information from the form and send to backend
  public userData = {
    username: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    role: ''
  }

  ngOnInit(): void { }
  constructor(private userService: UserService, private snack: MatSnackBar, private router: Router) { }
  // creating a object to collect the information from the form and send to backend
  hide = true;

  signupform = new FormGroup({
    usernameFormControl: new FormControl('', Validators.required),
    nameFormControl: new FormControl('', [Validators.required, Validators.pattern("[A-Z][a-zA-z]*")]),
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phoneFormControl: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    role: new FormControl('', Validators.required)
  });
  get validateusername() {

    return this.signupform.get("usernameFormControl");

  }
  get validatename() {

    return this.signupform.get("nameFormControl");

  }
  get validateemail() {

    return this.signupform.get("emailFormControl");

  }
  get validatepassword() {

    return this.signupform.get("passwordFormControl");

  }
  get validatephonenumber() {

    return this.signupform.get("phoneFormControl");

  }
  get validaterole() {
    return this.signupform.get("role");
  }



  // validations'



  formSubmit() {
    // alert('submit');
    console.log(this.userData);
    if (this.userData.username == '' || this.userData.username == null) {
      //alert('username is required')
      this.snack.open("Username is required !! ", '', {
        duration: 1000,

      })
      return;
    }


    if (this.userData.password.trim() == '' || this.userData.password == null) {
      this.snack.open("password is required", '', { duration: 1000 })
      return;
    };


    //add user:   userService
    this.userService.addUser(this.userData).subscribe(
      (data: any) => {
        //success
        console.log(data);
        // alert("success.....");
        Swal.fire('Successfully done',
          'User Successfully Registered !!',
          'success').then(() => {
            this.router.navigate(['/login']);
            
          });

      },
      (error) => {
        // failed
        console.log(error);
        //alert("somthing went wrong");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Somthing went wrong !! try another UserName',
        })
      }
    )
  }

  // Method to filter out non-numeric characters from the input value
  filterNonNumeric(event: any): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value.replace(/[^0-9]/g, '');
    input.value = newValue;
  }

}

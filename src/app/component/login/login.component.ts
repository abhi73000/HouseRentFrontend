import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: "",
    password: ""
  }

  constructor(private snack: MatSnackBar, private fb: FormBuilder, private login: LoginService, private router: Router) {
  }

  ngOnInit(): void { }
  hide = true;
  //validations

  loginform = new FormGroup({
    usernameFormControl: new FormControl('', Validators.required),
    passwordFormControl: new FormControl('', [Validators.required])
  });
  get validateusername() {
    return this.loginform.get("usernameFormControl");
  }
  get validatepassword() {

    return this.loginform.get("passwordFormControl");

  }

  formSubmit() {
     console.log(this.loginData);
    console.log("login form submit !!");

    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open("username is required", '', { duration: 1000 });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("password is required", '', { duration: 1000 })
      return;
    };

    //request to server to generate token

    this.login.generateToken(this.loginData).subscribe((data: any) => {
      // here we can use sweet snac
      console.log("success");
      console.log(data);

      // login....
      this.login.loginUser(data.token);

      this.login.getCurrentUser().subscribe((user: any) => {
        this.login.setUser(user);
        console.log(user);
        if(this.login.getUserRole() == null){
          alert("access Dened please check UserName And password")
        }
        // redirect .. ADMIN: admin-dashboard
        if (this.login.getUserRole() == 'admin') {
          // adim dashboard
          // window.location.href='/admin'
          this.router.navigate([''])
          this.login.loginStatusSubject.next(true);

        } else if (this.login.getUserRole() == 'owner') {
          // owner dashboard
          // window.location.href='/owner'
          this.router.navigate([''])
          this.login.loginStatusSubject.next(true);

        } else if (this.login.getUserRole() == 'tenant') {
          // tanet dashboard
          // window.location.href='/tenat'
          this.router.navigate(['tenant'])
          this.login.loginStatusSubject.next(true);

        } else {
          this.login.logOut();
          location.reload();
        }

        // redirect... Owner: Owner-dashboard 

        // redirect... Tenant: tenant-dashboard 
      });

    },
      (error) => {
        console.log("Error !");
        console.log(error);
        //this.snack.open("Invalid Details !! Try Again", "", { duration: 1000 })
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Correct Username and Password',
          showConfirmButton: false,
          timer: 1500,
          width: '350px'

        })
      }
    );

  }




}


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newUser = {
    name: '',
    email: '',
    phone: ''
  };
  user: any;

  constructor(private login: LoginService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.user = this.login.getUser();
    
    this.user = this.login.getCurrentUser().subscribe(
      (data: any) => {
        this.user = data;
        console.log("this is userId:  "+data.userId);
        this.newUser = { ...this.user };
        console.log(this.user);
      },
      (error) => {
        alert('Error fetching user data');
      }
    );
  }

  edit() {
    this.login.setUser(this.user);
  }

  update() {
    
    // const username = this.user.username;
    // this.userService.updateUser(username,this.newUser).subscribe((data: any) =>{
    //   this.router.navigate(['profile']);
    //   // this.router.navigateByUrl("http://localhost:4200/admin/profile");
    //   console.log(this.newUser);
    // },(error)=>{
    //   console.log(error);
    // })  
    
  }

  


  
}

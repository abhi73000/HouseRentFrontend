import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  uId = 0
  newUser = {
    userId: '',
    username: '',
    name: '',
    email: '',
    password: '',
    role: '',
    phone: ''
  }

  constructor(private route: ActivatedRoute, private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.uId = this.route.snapshot.params['userId'];

    //  alert(this.uId);

    this.userService.getUserById(this.uId).subscribe((data: any) => {
      this.newUser = {
        userId: data.userId,
        username: data.username,
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        phone: data.phone
      };
      console.log(this.newUser);
    }, (error: any) => {
      console.log(error);
    });
  }




  update() {
    //validation add
    console.log(this.newUser);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService.updateUser(this.newUser).subscribe((data: any) => {
          Swal.fire('Saved!', '', 'success')
          
          this.router.navigate(['../profile']);
         

        }, (error) =>
          console.log(error));
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}


import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tenantlist',
  templateUrl: './tenantlist.component.html',
  styleUrls: ['./tenantlist.component.css']
})
export class TenantlistComponent {
  tenants: any[] = []

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.loadProperties();
  };

  loadProperties() {
    this.userService.getAllUsersByUserRole("tenant").subscribe((data: any) => {
      console.log(data.userId)
      this.tenants = data;
      console.log(data);
    });
  }


  deleteUser(userId: any) {
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
        this.userService.deleteUserById(userId).subscribe((result) => {
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

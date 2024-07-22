import { Component, OnInit } from '@angular/core';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ownerlist',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./ownerlist.component.css']
})



export class OwnerlistComponent implements OnInit {
  owners: any[] = [];

  constructor(private userService: UserService, private listPropertyService: ListpropertyService) { }
  ngOnInit(): void {
    this.loadProperties();

  };

  loadProperties() {
    this.userService.getAllUsersByUserRole("owner").subscribe((data: any) => {
      console.log(data.userId)
      this.owners = data;
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

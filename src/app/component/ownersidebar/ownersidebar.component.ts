import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ownersidebar',
  templateUrl: './ownersidebar.component.html',
  styleUrls: ['./ownersidebar.component.css']
})
export class OwnersidebarComponent {
  constructor(public login: LoginService, private router:Router) { }

  public logout() {
    // this.login.logOut();
    // window.location.reload();
    // //this.login.loginStatusSubject.next(true)
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.logOut(); // Call the logout() method here
        Swal.fire(
          'Logged!',
          'Sussessfully Logged Out.',
          'success'
        ).then(() => {
          this.router.navigate(['/login']); // Redirect to the login page after logout
          window.location.reload();
        });
      }
    });
    
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  isLoggedIn = false;
  user: { username: string } | null = null;


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public login: LoginService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });

  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }



  public logout() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.logOut();
        Swal.fire(
          'Logged!',
          'Sussessfully Logged Out.',
          'success'
        ).then(() => {
          this.login.loginStatusSubject.next(true)
          this.router.navigate(["/home"]);
          //  window.location.reload();
        });
      }
    });

  }


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user: { username: string } | null = null;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public login: LoginService) { }
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
    this.login.logOut();
    window.location.reload();
    //this.login.loginStatusSubject.next(true)
  }
}


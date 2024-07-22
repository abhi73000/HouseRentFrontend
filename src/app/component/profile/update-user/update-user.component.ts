import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
  // Get a reference to the close button element


export class UpdateUserComponent {
  @ViewChild('closebutton') closebutton:any;
  user: any;

constructor(private router:Router){}
  public onSave() {
    this.closebutton.nativeElement.click();
  }
  close(){
    this.router.navigate(["/profile"]);
  }
}

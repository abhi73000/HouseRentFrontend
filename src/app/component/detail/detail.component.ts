import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ListpropertyService } from 'src/app/services/listproperty.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  isLoggedIn = false;
  propertyList: any;

  constructor(private listPropertyService: ListpropertyService, private activeRoute: ActivatedRoute,private sanitizer:DomSanitizer,
    public login: LoginService) { }
  ngOnInit(): void {

    let productId = this.activeRoute.snapshot.paramMap.get('propertyId');
    console.log(productId)
    productId && this.listPropertyService.getPropertyById(productId).subscribe((data: any) => {
      console.warn(data)
      this.propertyList = data;
      // this.newPropertyList = { ...this.propertyList };
      console.log(this.propertyList);
    },
      (error) => {
        alert('Error fetching user data');
      }
    );

    this.isLoggedIn = this.login.isLoggedIn();
    
  }


  getFile(blob: any) {
    let objectURL = 'data:image/jpeg;base64,' + blob;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  
}

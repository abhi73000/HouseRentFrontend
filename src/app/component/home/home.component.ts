import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ListpropertyService } from 'src/app/services/listproperty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  searchResult: any[] | undefined;
  constructor(private listPropertyService: ListpropertyService, private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.getAllProperties();
  }
  
  homes: any[] = [];
  propertyDetails = [];

  pid = 0;
  search : string = ''

  // searchProperty(data: KeyboardEvent) {
  //   if (data) {
  //     const element = data.target as HTMLTextAreaElement;
  //     this.getAllProperties(element.value); // Fetch properties based on the search input
  //   }
  // }
  searchProperty() {
    console.log("hello", this.search);

    if (this.search.trim() === '') {
      console.log("if section");
      // If the search term is empty, reset 'homes' to the original data
      this.getAllProperties();
    } else {
      console.log("else section");
      this.homes = this.homes.filter(data =>
        (data.location.city && data.location.city.toLowerCase().includes(this.search.toLowerCase())) ||
        (data.location.address && data.location.address.toLowerCase().includes(this.search.toLowerCase()))
      );
    }
  }

  public getAllProperties(searchKey: string = "") {
    this.listPropertyService.getAllListedProperty(searchKey)
      .subscribe(
        (data: any[]) => {
          this.homes = data;
          // const pid = this.homes.length > 0 ? this.homes[0].photo2 : null;
          console.log('Data:', data);
          // console.log('First Property ID:', pid);
        },
        (error) => {
          console.error('Error fetching properties:', error);
        }
      );
  }

  getFile(blob: any) {
    let objectURL = 'data:image/jpeg;base64,' + blob;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  searchByKeyboard(searchKeyboard: any) {
    console.log(searchKeyboard);
  }
}

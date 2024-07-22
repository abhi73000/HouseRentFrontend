import { Component, OnInit } from '@angular/core';
import { ListpropertyService } from 'src/app/services/listproperty.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private listPropertyService: ListpropertyService) { }
  ngOnInit(): void {
    
  }



}

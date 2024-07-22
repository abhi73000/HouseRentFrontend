import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListpropertyService {

  constructor(private http: HttpClient) { }

  public listProperty(propertyDetails: any) {
    return this.http.post(`${baseUrl}/property/create`, propertyDetails);
  }

  public getAllListedProperty(searchKey: string = ""): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/property/getall?searchKey=` + searchKey);
  }


  public getAllTypeProperty(){
    return this.http.get(`${baseUrl}/property/getAllListed`);
  }
  public getPropertyById(propertyId: any) {
    return this.http.get(`${baseUrl}/property/get/${propertyId}`);
  }

  public getPropertyByUserId(userId: any) {
    return this.http.get<any[]>(`${baseUrl}/property/userproperty/${userId}`);
  }

  public deletePropertyByPropertyId(propertyId: any) {
    return this.http.delete(`${baseUrl}/property/deleteProperty/${propertyId}`);
  }

  public updateProperty(updatedProperty: any): Observable<Object> {
    console.log("Call sucessFUll");
    return this.http.put(`${baseUrl}/property/updateProperty/`, updatedProperty)
      .pipe(
        catchError((error) => {
          console.error('Error updating user:', error);
          throw error; // Rethrow the error for further handling
        })
      );
  }

  public getPropertyByCity(city: any) {
    return this.http.get(`${baseUrl}/property/getPropertyByCity/${city}`);
  }

}

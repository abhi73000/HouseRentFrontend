import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RentrequestserviceService {

  constructor(private http: HttpClient) { }
  
  public createRequest(requestDetails: any) {
    return this.http.post(`${baseUrl}/request/create`, requestDetails);
  }

  public getAllRequests(){
    return this.http.get(`${baseUrl}/request/getall`);
  }

  public deleteRequest(reqid:any){
    return this.http.delete(`${baseUrl}/request/deletereq/${reqid}`);
  }

  public getAllRequestByOwnerId(ownerId:any){
    return this.http.get(`${baseUrl}/request/getreq/${ownerId}`)
  }
}

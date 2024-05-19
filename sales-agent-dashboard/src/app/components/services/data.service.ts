import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; // URL to your json-server

  constructor(private http: HttpClient) { }

  getCollections(): Observable<any> {
    return this.http.get(`${this.baseUrl}/collections`);
  }

  getSignups(): Observable<any> {
    return this.http.get(`${this.baseUrl}/signups`);
  }

  getRevenue(): Observable<any> {
    return this.http.get(`${this.baseUrl}/revenue`);
  }

  getBouncedCheques(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bouncedCheques`);
  }

  getUpcomingInvoices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/upcomingInvoices`);
  }

  getSchools(): Observable<any> {
    return this.http.get(`${this.baseUrl}/schools`);
  }
}

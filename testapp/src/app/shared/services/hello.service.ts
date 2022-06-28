import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private apiUrl = "http://localhost:3000/api"
  constructor(
    private httpClient: HttpClient
  ) { }

  getHello() {
    return this.httpClient.get(`${this.apiUrl}/hello`);
  }
}

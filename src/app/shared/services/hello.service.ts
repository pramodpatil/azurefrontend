import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private apiUrl = environment.apiUrl; //"http://localhost:3000/api"
  constructor(
    private httpClient: HttpClient
  ) { }

  getHello() {
    return this.httpClient.get(`${this.apiUrl}/hello`);
  }
}

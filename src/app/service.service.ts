import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  base_Url = "https://reqres.in/api/users";

  constructor(private HttpClient: HttpClient) { }

  get_api() {
    return this.HttpClient.get(this.base_Url);
  }
  get_id(id: number) {
    return this.HttpClient.get(this.base_Url + "/" + id)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  getUserDetails: any = [];

  constructor(private service: ServiceService, private _route: Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  // Profile Details All Users
  getDetails() {
    this.service.get_api().subscribe(res => {
      this.getUserDetails = res
    })
  }

  //Navigate To User Detaile By Id
  userDetails(userid: any) {
    this._route.navigate(['/userProfile', userid]);
  }
}
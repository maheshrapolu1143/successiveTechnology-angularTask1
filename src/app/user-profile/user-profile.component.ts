import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: any;
  profileResponse: any;

  constructor(private dataService: ServiceService, private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataUserId();
  }
  
  //Get User Profile By Id
  dataUserId() {
    this.userId = this.ActivatedRouter.snapshot.params['id']
    this.dataService.get_id(this.userId).subscribe(res => {
      this.profileResponse = Object.values(res)[0];
    })
  }
}
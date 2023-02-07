import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApi } from 'src/app/models/user-api.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  readonly userApiResult: UserApi

  constructor(private activatedRoute: ActivatedRoute) {
    this.userApiResult = this.activatedRoute.snapshot.data.user;
  }

}

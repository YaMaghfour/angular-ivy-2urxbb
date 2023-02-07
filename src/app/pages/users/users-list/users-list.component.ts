import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user.model';
import { PaginationApiModel } from 'src/app/models/users-list-api.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: PaginationApiModel<User>;

  dtOptions: DataTables.Settings = {};

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.usersList = this.activatedRoute.snapshot.data.usersList;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: this.usersList.per_page,
      paging: false,
      search: false,
      searching: false,
      info: false,
      ordering: false,
      processing: true,
      scrollX: true,
      autoWidth: false
    };
  }

  pageChange($event: number) {
    this.userService.getUsers($event).subscribe(res => {
      this.usersList = res;
    })
  }

}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { PaginationApiModel } from '../models/users-list-api.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GetUsersListResolver implements Resolve<PaginationApiModel<User>> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginationApiModel<User>> {
    return this.userService.getUsers();
  }
}

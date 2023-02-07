import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserApi } from '../models/user-api.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsResolver implements Resolve<UserApi> {

  constructor(private userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserApi> {
    try {
      const userId = Number(route.paramMap.get('id'));
      if (isNaN(userId))
        throw new SyntaxError("User ID invalid");

      return this.userService.getUserFromId(userId);
    }
    catch {
      this.router.navigateByUrl("/users");
      return of(null);
    }
  }
}

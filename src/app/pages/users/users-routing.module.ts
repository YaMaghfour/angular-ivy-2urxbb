import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserDetailsResolver } from 'src/app/resolvers/get-user-details.resolver';
import { GetUsersListResolver } from 'src/app/resolvers/get-users-list.resolver';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent, resolve: { usersList: GetUsersListResolver } },
  { path: 'add', component: AddUserComponent },
  { path: ':id', component: UserDetailComponent, resolve: { user: GetUserDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

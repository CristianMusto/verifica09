import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormAddComponent } from './form-add/form-add.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { TableUsersComponent } from './table-users/table-users.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: TableUsersComponent},
  {path: 'addUser', component: FormAddComponent},
  {path: 'detailUsers/:id', component: DetailUserComponent},
  {path: 'editUsers/:id', component: EditUserComponent},
  {path: 'posts/:id', component: PostsComponent},
  {path: 'posts/:id/comments', component: CommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

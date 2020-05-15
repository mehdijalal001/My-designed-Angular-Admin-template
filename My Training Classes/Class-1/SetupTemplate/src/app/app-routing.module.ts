import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { PostsComponent } from './content/components/posts/posts.component';
import { DashboardComponent } from './content/components/dashboard/dashboard.component';
import { UsersComponent } from './content/components/admin/users/users.component';


const routes: Routes = [
  {
    path:'',component:DefaultComponent
  },
  {
    path:'posts',component:PostsComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'users',component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

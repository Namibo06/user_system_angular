import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { CreateUserComponent } from './pages/create-user/create-user/create-user.component';
import { ViewUserComponent } from './pages/view-user/view-user/view-user.component';

const routes: Routes = [
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'criar-usuario',
    component:CreateUserComponent
  },
  {
    path:'usuario/:id',
    component:ViewUserComponent
  },
  {
    path:'**',
    component:IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

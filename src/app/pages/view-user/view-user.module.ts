import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';



@NgModule({
  declarations: [ViewUserComponent],
  exports:[ViewUserComponent],
  imports: [
    CommonModule
  ]
})
export class ViewUserModule { }

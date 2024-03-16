import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';



@NgModule({
  declarations: [ViewUserComponent],
  exports:[ViewUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ]
})
export class ViewUserModule { }

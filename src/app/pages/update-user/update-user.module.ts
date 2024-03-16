import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UpdateUserComponent],
  exports:[UpdateUserComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    RouterModule
  ]
})
export class UpdateUserModule { }

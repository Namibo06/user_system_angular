import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateUserComponent],
  exports:[CreateUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateUserModule { }

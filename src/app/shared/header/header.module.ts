import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleModule } from '../../components/title/title.module';
import { LinkModule } from '../../components/link/link.module';



@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    TitleModule,
    LinkModule
  ]
})
export class HeaderModule { }

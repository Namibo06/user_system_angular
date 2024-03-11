import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';


@NgModule({
  declarations: [IndexComponent],
  exports:[IndexComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class IndexModule { }

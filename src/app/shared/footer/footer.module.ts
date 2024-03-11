import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LinkModule } from '../../components/link/link.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FooterComponent],
  exports:[FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    LinkModule,
    FontAwesomeModule
  ]
})
export class FooterModule { }

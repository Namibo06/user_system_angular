import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass','./title.responsive.component.sass']
})
export class TitleComponent {
  @Input() title:string='';
}

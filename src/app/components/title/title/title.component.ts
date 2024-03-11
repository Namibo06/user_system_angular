import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.sass'
})
export class TitleComponent {
  @Input() title:string='';
}

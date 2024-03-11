import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.sass'
})
export class LinkComponent {
  @Input() name_links:Object={
    
  };
}

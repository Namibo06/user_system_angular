import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  title:string='User System';
  name_links:Object={

  };

  redirect_links:Object={
    
  }
}

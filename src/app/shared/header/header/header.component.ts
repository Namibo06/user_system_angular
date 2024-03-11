import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass','./header.responsive.component.sass']
})
export class HeaderComponent {
  title:string='User System';

  name_links={
    create_user:'Criar Usuário',
    tutorial:'Tutorial',
    sair:'Sair'
  };

  redirect_links={
    create_user: 'criar_usuario',
    tutorial: 'tutorial',
    sair:'Sair'
  }
}

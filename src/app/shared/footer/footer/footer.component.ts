import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass','./footer.responsive.component.sass']
})
export class FooterComponent {
  name_links={
    cadastro:'Cadastrar-se',
    login:'Iniciar Sessão',
    usuarios:'Usuários'
  };

  redirect_links={
    cadastro:'cadastro',
    login:'iniciar-sessao',
    usuarios:'usuarios'
  };

  date:number=new Date().getFullYear();

  facebook:IconDefinition=faFacebook;
  twitter:IconDefinition=faTwitter;
  instagram:IconDefinition=faInstagram;
}

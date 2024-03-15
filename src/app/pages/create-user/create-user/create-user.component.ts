import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass','./create-user.responsive.component.sass']
})
export class CreateUserComponent {
  /**attributes */
  first_name:string='';
  last_name:string='';
  email:string='';
  nivel_user:string='';
  password:string='';
  confirm_password:string='';

  /**callback's */
  callbackError:boolean=false;
  messageError:string='';
  callbackSucess:boolean=false;
  messageSucess:string='';

  constructor(){

  }

  create_user(){
    if(this.password !== this.confirm_password){
      this.messageError="Senhas não são iguais";
      this.callbackError=true;

      setTimeout(() => {
        this.callbackError=false;
      }, 5000);
    }

    
  }
}

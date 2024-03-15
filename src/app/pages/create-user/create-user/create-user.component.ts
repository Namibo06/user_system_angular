import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';

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

  constructor(
    private service:UserService
  ){

  }

  create_user(){
    if(this.password !== this.confirm_password){
      this.messageError="Senhas não são iguais";
      this.callbackError=true;

      setTimeout(() => {
        this.callbackError=false;
      }, 5000);
    }

    this.service.createUser(this.first_name,this.last_name,this.email,this.nivel_user,this.password).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}

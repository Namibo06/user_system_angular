import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass','./index.responsive.component.sass']
})
export class IndexComponent {
  users:any=[];
  modal_delete_user:boolean=false;
  option_delete_user:string='';

  constructor(
    private service:UserService
  ){
    this.get_all_users();
  }

  get_all_users(){
    this.service.getAllUsers().subscribe({
      next:(res)=>{
        console.log(res);
        this.users=res;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  open_modal_delete_user(){
    this.modal_delete_user=true;
  }

  close_modal_delete_user(){
    this.modal_delete_user=false;
  }

  delete_user(){

  }
}

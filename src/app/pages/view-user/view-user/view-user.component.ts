import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.sass'
})
export class ViewUserComponent {
  id:string="";
  first_name:string='';
  last_name:string='';
  email:string='';
  nivel_user:string='';

  constructor(
    private service:UserService,
    private route:ActivatedRoute
  ){
    this.id=this.route.snapshot.params["id"];
    this.get_one_user();
  }

  get_one_user(){
    this.service.getOneUser(this.id).subscribe({
      next:(res)=>{
        //console.log(res);
        this.first_name=res.first_name;
        this.last_name=res.last_name;
        this.email=res.email;
        this.nivel_user=res.nivel_user;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}

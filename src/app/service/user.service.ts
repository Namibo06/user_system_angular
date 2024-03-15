import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUser:string='http://localhost:8080/user';

  constructor(
    private http:HttpClient
  ) { }

  createUser(first_name:string,last_name:string,email:string,nivel_user:string,password:string){
    const body={
      'first_name':first_name,
      'last_name':last_name,
      'email':email,
      'nivel_user':nivel_user,
      'password':password
    };

    return this.http.post(this.urlUser,body);
  }
}

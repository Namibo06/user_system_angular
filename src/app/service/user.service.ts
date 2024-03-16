import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { create_user } from '../models/create_user';
import { get_all_user } from '../models/get_all_user';
import { get_one_user } from '../models/get_one_user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUser:string='http://localhost:8080/users';

  constructor(
    private http:HttpClient
  ) { }

  getAllUsers():Observable<get_all_user>{
    return this.http.get<get_all_user>(this.urlUser);
  }

  getOneUser(id:string):Observable<get_one_user>{
    return this.http.get<get_one_user>(this.urlUser+"/"+id);
  }

  createUser(first_name:string,last_name:string,email:string,nivel_user:string,password:string):Observable<create_user>{
    const body={
      'first_name':first_name,
      'last_name':last_name,
      'email':email,
      'nivel_user':nivel_user,
      'password':password
    };

    return this.http.post<create_user>(this.urlUser,body);
  }

  updateUser(id:string,first_name:string,last_name:string,email:string,nivel_user:string,password:string):Observable<create_user>{
    const body={
      'first_name':first_name,
      'last_name':last_name,
      'email':email,
      'nivel_user':nivel_user,

    };

    return this.http.put<create_user>(this.urlUser+"/"+id,body);
  }

  deleteUser(id:string){
    return this.http.delete(this.urlUser+"/"+id);
  }
}

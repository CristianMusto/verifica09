import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { IUser, IUserRes } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [];

  constructor(private http: HttpClient) {
    this.http.get<IUser[]>(environment.jsonUrlU).subscribe(data => {
      this.users = data
      console.log(this.users);
    })
  }

  getAllUsers(){
    return this.users
  }

  getUserById(id:number){
    return this.http.get<IUserRes>(environment.jsonUrlU+id);
  }

  deleteUser(user: IUser){
    this.http.delete(environment.jsonUrlU + user.id).subscribe(res => {
      this.users = this.users.filter(element => element.id !== user.id);
    })
  }


  createUser(user: IUser){
    this.http.post<IUser>(environment.jsonUrlU, user).subscribe(res => {
      this.users.push(res)
    })
  }

  saveUser(user: IUser){
    this.http.put<IUser>(environment.jsonUrlU + user.id, user).subscribe(res => {
      let obj = this.users.find(element => element.id == user.id)
      if(obj){
        let index = this.users.indexOf(obj);
        this.users.splice(index, 1, res);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  tableUsers: IUser[] = []

  ngOnInit(): void {
    setTimeout(() =>{
      this.tableUsers = this.userService.getAllUsers()

    }, 500)
  }

  removeUser(user: IUser): void {
    this.userService.deleteUser(user)
    this.tableUsers = this.tableUsers.filter(element => element.id !== user.id);
  }

  addUser(){
    this.router.navigate(['addUser'])
  }

  detailUser(user: IUser){
    this.router.navigate(['detailUsers', user.id])
  }

}

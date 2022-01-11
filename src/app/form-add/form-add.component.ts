import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { IUser } from '../interfaces/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  user: IUser = new User()

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.createUser(this.user)
    this.router.navigate(['/users']);
  }

}

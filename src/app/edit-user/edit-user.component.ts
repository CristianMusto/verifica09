import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUserRes } from '../interfaces/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser!: IUserRes;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params.subscribe(res => {
        this.userService.getUserById(res['id']).subscribe(data => {
          this.editUser = data;
          console.log(this.editUser);
        })
      })

    }, 500);
  }

  updateUser(): void {
    this.userService.saveUser(this.editUser)
    this.router.navigate(['/users'])
  }

}

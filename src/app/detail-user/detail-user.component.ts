import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserDetail } from '../classes/user';
import { IUser, IUserRes } from '../interfaces/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  detailUser!: IUserRes;

  constructor(private route : ActivatedRoute, private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.route.params.subscribe(res => {
        this.userService.getUserById(res['id']).subscribe(data => {
          this.detailUser = data;
          console.log(this.detailUser);
        })
      })

    }, 500);
  }

  editUser(){
    this.router.navigate(['/editUsers', this.detailUser.id])
  }

  goPosts(){
    this.router.navigate(['/posts', this.detailUser.id])
  }

}

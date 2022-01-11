import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user';
import { IComments } from '../interfaces/icomments';
import { IPosts } from '../interfaces/iposts';
import { IUser } from '../interfaces/iuser';
import { CommentsService } from '../services/comments.service';
import { PostsService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[] = [];
  user : IUser = new User();
  comments: IComments[] = [];
  openComments : boolean = false;
  //postsId!: IPosts;
  //commentsId!: IComments;

  constructor(private postService: PostsService, private route : ActivatedRoute, private userService : UserService, private CommentsService : CommentsService, private router : Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params.subscribe(params => {
          this.posts = this.postService.getAllPost().filter(element => element.userId == params['id'])
          console.log(this.posts);
          /*this.posts.forEach((el) => {
            this.postsId = el;
            this.CommentsService.getCommentsById(this.postsId.id).subscribe(res => {
              this.commentsId = res;
            })
          })*/
          this.userService.getUserById(params['id']).subscribe(res => {
          this.user = res;
        })
      })

    }, 500);
  }

  goComments(post : IPosts): void {
    this.router.navigate(['/posts', post.id, 'comments'])
  }
}

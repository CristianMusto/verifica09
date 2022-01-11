import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComments } from '../interfaces/icomments';
import { IPosts } from '../interfaces/iposts';
import { CommentsService } from '../services/comments.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  constructor(private commentsService: CommentsService, private route: ActivatedRoute, private postService: PostsService, private router: Router) { }

  commentsA: IComments[] = [];
  post!: IPosts;

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params.subscribe(params => {
        this.commentsService.getCommentsById(params['id']).subscribe(res => {
          this.commentsA = res
        })
        this.postService.getPostsById(params['id']).subscribe(res => {
          this.post = res
          console.log(this.post);
        })
      })
    }, 500);
  }

  goPosts(): void {
    this.router.navigate(['/posts', this.post.userId]);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from '../interfaces/iposts';
import { environment } from '../../environments/environment'
import { IComments } from '../interfaces/icomments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: IPosts[]=[];

  constructor(private http: HttpClient) {
    this.http.get<IPosts[]>(environment.jsonUrlP).subscribe(res => {
      this.posts = res

    })
  }

  getAllPost(){
    return this.posts
  }

  getPostsById(id: number){
    return this.http.get<IPosts>(environment.jsonUrlP + id)
  }

}

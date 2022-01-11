import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { IComments } from '../interfaces/icomments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: IComments[] = []

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<IComments[]>(environment.jsonUrlP).subscribe(data => {
      this.comments = data
      console.log(this.comments);
    })
  }

  getAllComments(){
    return this.comments
  }

  getCommentsById(id: number){
    return this.http.get<IComments[]>(environment.jsonUrlP + id + '/comments')
  }
}

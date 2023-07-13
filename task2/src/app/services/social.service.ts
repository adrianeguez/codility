import { Observable, of } from 'rxjs';
import { Friend } from './../interfaces/friend.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }

  getFriends(): Observable<Friend[]> {
    return of([
      {
        name: 'Oscar',
        likeCount: 1
      },

      {
        name: 'Pedro',
        likeCount: 2
      },

      {
        name: 'Maria',
        likeCount: 3
      },

      {
        name: 'Juan',
        likeCount: 1
      },

      {
        name: 'Adrian',
        likeCount: 10
      },
    ])
  }
}


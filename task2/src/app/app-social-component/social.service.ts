import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Friend {
  name: string;
  likeCount: number;
  isLiking?:boolean;
}


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
// @ts-ignore
export class SocialService {
  private friends: Friend[] = [
    { name: 'John', likeCount: 10 },
    { name: 'Alice', likeCount: 20 },
    { name: 'Bob', likeCount: 15 },
    { name: 'Emily', likeCount: 12 },
    { name: 'David', likeCount: 18 }
  ];

  getFriends(): Observable<Friend[]> {
    return of(this.friends);
  }

  likeFriend(name: string): Observable<{ likeCount: number }> {
    const friend = this.friends.find(f => f.name === name);
    if (friend) {
      friend.likeCount++;
      return of({ likeCount: friend.likeCount });
    } else {
      return of(null); // Friend not found
    }
  }
}

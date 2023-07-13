import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';

import { Friend } from '../../interfaces/friend.type';


@Component({
  selector: 'app-social',
  template: ` <div class="app-wrapper">
    <h1>My Friends</h1>
    <ul>
      <li *ngFor="let friend of friends" [attr.data-test-id]="'li-'+friend.name.toLowerCase()">
        <span>{{friend.name}}</span>
        <button [attr.data-test-id]="'button-'+friend.name.toLowerCase()" (click)="likeFriend(friend.name)">
          Like {{friend.likeCount}}
        </button>
      </li>
    </ul>
  </div> `,
})
export class SocialComponent implements OnInit {

  friends: Friend[] = [];
  constructor(private socialService: SocialService) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.socialService.getFriends().subscribe({
      next: (friends: Friend[]) => {
        this.friends = this.getFirstFiveHighestLike(friends).slice(0, 5);
      }
    });
  }

  getFirstFiveHighestLike(friends: Friend[]): Friend[] {
    return friends.sort((a, b) => {
      return b.likeCount - a.likeCount
    })
  }
  
  likeFriend(nameFriend: string){
    
  }
}

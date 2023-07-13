import { Component, OnInit } from '@angular/core';
import { SocialService, Friend } from './social.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-social-component',
  template: `
    <div class="app-wrapper">
      <h1>My Friends</h1>
      <ul>
        <li *ngFor="let friend of friends" [attr.data-test-id]="'li-' + friend.name.toLowerCase()">
          <span>{{ friend.name }}</span>
          <button [attr.data-test-id]="'set-0-button-' + friend.name.toLowerCase()" (click)="likeFriend(friend)"
                  [disabled]="friend.isLiking">
            Like {{ friend.likeCount }}
          </button>
        </li>
      </ul>
      <h3 *ngIf="error">{{ error }}</h3>
    </div>
  `,
  styles: []
})
export class SocialComponent implements OnInit {
  friends: Friend[] = [];
  error: string = '';

  constructor(private socialService: SocialService) {}

  ngOnInit() {
    this.getFriends();
  }

  getFriends() {
    this.socialService.getFriends().pipe(
      catchError(() => {
        this.error = 'Fetching friends has failed.';
        return of(null);
      })
    ).subscribe((response: Friend[]) => {
      if (response) {
        this.friends = response.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);
      }
    });
  }

  likeFriend(friend: Friend) {
    friend.isLiking = true;
    this.socialService.likeFriend(friend.name).pipe(
      catchError(() => {
        this.error = 'Liking friend has failed.';
        friend.isLiking = false;
        return of(null);
      })
    ).subscribe((response: { likeCount: number }) => {
      if (response) {
        friend.likeCount = response.likeCount;
        this.friends = this.friends.sort((a, b) => b.likeCount - a.likeCount);
      }
      friend.isLiking = false;
    });
  }
}

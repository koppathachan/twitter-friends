import { Component, OnInit } from '@angular/core';
import { MutualFriendsService } from '../mutual-friends.service';
import { Observable } from 'rxjs';
import { TwitterUser } from '../mutual-friends/mutual-friends.component';

@Component({
  selector: 'app-input-friend',
  templateUrl: './input-friend.component.html',
  styleUrls: ['./input-friend.component.scss']
})
export class InputFriendComponent implements OnInit {

  dataSource: Observable<TwitterUser>;
  mutualFriends(user1: string, user2: string) {
    this.dataSource = this.mutualFriendsService.getMutualFriends(user1, user2)
    // this.dataSource.subscribe(res => console.log(res))
    //TODO:
    return false
  }



  constructor(private mutualFriendsService: MutualFriendsService) { }

  ngOnInit(): void {
  }

}

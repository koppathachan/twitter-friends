import { Component, OnInit, Input } from '@angular/core';

export interface TwitterUser {
  name: string;
  screen_name: string;
  description: string;
}

const ELEMENT_DATA: TwitterUser[] = [

];

@Component({
  selector: 'app-mutual-friends',
  templateUrl: './mutual-friends.component.html',
  styleUrls: ['./mutual-friends.component.scss']
})
export class MutualFriendsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'screen_name', 'description'];
  @Input() dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

import { TestBed } from '@angular/core/testing';

import { MutualFriendsService } from './mutual-friends.service';

describe('MutualFriendsService', () => {
  let service: MutualFriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutualFriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

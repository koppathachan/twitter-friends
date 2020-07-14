import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFriendsComponent } from './mutual-friends.component';

describe('MutualFriendsComponent', () => {
  let component: MutualFriendsComponent;
  let fixture: ComponentFixture<MutualFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

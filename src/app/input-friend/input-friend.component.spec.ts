import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFriendComponent } from './input-friend.component';

describe('InputFriendComponent', () => {
  let component: InputFriendComponent;
  let fixture: ComponentFixture<InputFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

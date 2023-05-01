import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFriendRequestComponent } from './pending-friend-request.component';

describe('PendingFriendRequestComponent', () => {
  let component: PendingFriendRequestComponent;
  let fixture: ComponentFixture<PendingFriendRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingFriendRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForFriendComponent } from './search-for-friend.component';

describe('SearchForFriendComponent', () => {
  let component: SearchForFriendComponent;
  let fixture: ComponentFixture<SearchForFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

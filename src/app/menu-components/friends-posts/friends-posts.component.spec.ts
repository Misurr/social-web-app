import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsPostsComponent } from './friends-posts.component';

describe('FriendsPostsComponent', () => {
  let component: FriendsPostsComponent;
  let fixture: ComponentFixture<FriendsPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsPostsComponent]
    });
    fixture = TestBed.createComponent(FriendsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

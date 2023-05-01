import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PendingTODOComponent } from './pending-todo/pending-todo.component';
import { InprogressTODOComponent } from './inprogress-todo/inprogress-todo.component';
import { CompletedTODOComponent } from './completed-todo/completed-todo.component';
import { PendingFriendRequestComponent } from './pending-friend-request/pending-friend-request.component';
import { SearchForFriendComponent } from './search-for-friend/search-for-friend.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { FriendsChatComponent } from './friends-chat/friends-chat.component';
import { ChatByIdComponent } from './chat-by-id/chat-by-id.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path: 'dashboard',
  component: UserDashboardComponent
},{
  path: 'pending-todo',
  component: PendingTODOComponent
},{
  path: 'inprogress-todo',
  component: InprogressTODOComponent
},{
  path: 'completed-todo',
  component: CompletedTODOComponent
},{
  path: 'pending-request',
  component: PendingFriendRequestComponent
},{
  path: 'search-for-friend',
  component: SearchForFriendComponent
},{
  path: 'all-friends',
  component: AllFriendsComponent
},{
  path: 'friends-chating',
  component: FriendsChatComponent
},{
  path: 'personal-chat',
  component: ChatByIdComponent
},{
  path: 'profile',
  component: ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

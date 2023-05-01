import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PendingTODOComponent } from './pending-todo/pending-todo.component';
import { InprogressTODOComponent } from './inprogress-todo/inprogress-todo.component';
import { CompletedTODOComponent } from './completed-todo/completed-todo.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgxPaginationModule } from "ngx-pagination";
import { PendingFriendRequestComponent } from './pending-friend-request/pending-friend-request.component';
import { SearchForFriendComponent } from './search-for-friend/search-for-friend.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { FriendsChatComponent } from './friends-chat/friends-chat.component';
import { ChatByIdComponent } from './chat-by-id/chat-by-id.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [UserDashboardComponent, PendingTODOComponent, InprogressTODOComponent, CompletedTODOComponent, PendingFriendRequestComponent, SearchForFriendComponent, AllFriendsComponent, FriendsChatComponent, ChatByIdComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbTooltipModule,
    MatTooltipModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatTabsModule
  ]
})
export class UserModule { }

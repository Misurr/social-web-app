import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsComponent } from './posts/posts.component';
import { MessagesComponent } from './menu-components/messages/messages.component';
import { MyFriendsComponent } from './menu-components/my-friends/my-friends.component';
import { TrendsComponent } from './menu-components/trends/trends.component';
import { GroupsComponent } from './menu-components/groups/groups.component';
import { SettingsComponent } from './menu-components/settings/settings.component';

const childrenComponents: Routes = [
  { path: '', component: PostsComponent },
  { path: 'my-friends', component: MyFriendsComponent },

  { path: 'trends', component: TrendsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'settings', component: SettingsComponent },
];

const routes: Routes = [
  // { path: '', pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', component: HomepageComponent, children: childrenComponents },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

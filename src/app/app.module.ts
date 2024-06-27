import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FriendsComponent } from './friends/friends.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PostsComponent } from './posts/posts.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MyFriendsComponent } from './menu-components/my-friends/my-friends.component';
import { MessagesComponent } from './menu-components/messages/messages.component';
import { TrendsComponent } from './menu-components/trends/trends.component';
import { FriendsPostsComponent } from './menu-components/friends-posts/friends-posts.component';
import { VideoComponent } from './menu-components/video/video.component';
import { ImagesComponent } from './menu-components/images/images.component';
import { GroupsComponent } from './menu-components/groups/groups.component';
import { SettingsComponent } from './menu-components/settings/settings.component';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MessageComponent } from './menu-components/messages/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomepageComponent,
    HeaderComponent,
    FriendsComponent,
    MenuBarComponent,
    PostsComponent,
    MyFriendsComponent,
    MessagesComponent,
    TrendsComponent,
    FriendsPostsComponent,
    VideoComponent,
    ImagesComponent,
    GroupsComponent,
    SettingsComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

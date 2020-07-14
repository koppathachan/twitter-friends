import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFriendComponent } from './input-friend/input-friend.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { MutualFriendsComponent } from './mutual-friends/mutual-friends.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputFriendComponent,
    MutualFriendsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  entryComponents: [InputFriendComponent],
  providers: [
  ],
  bootstrap: [AppComponent, InputFriendComponent]
})
export class AppModule { }

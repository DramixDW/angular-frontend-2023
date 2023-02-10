import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ZippyComponent } from './components/zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './components/mon-premier-composant/mon-premier-composant.component';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

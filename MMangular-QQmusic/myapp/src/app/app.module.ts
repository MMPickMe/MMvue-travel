import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { MitulePipe } from './pipes/mitule.pipe';
import { MyclassDirective } from './myclass.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    UserComponent,
    NewscontentComponent,
    MitulePipe,
    MyclassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

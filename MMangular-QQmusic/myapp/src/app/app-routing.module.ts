import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  } //,
  // {
  //   path:'**',
  //   component:HomeComponent
  // }

  ,{
    path:'newscontent/:aid',
    component:NewscontentComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JobMatchComponent } from './job-match/job-match.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
},
  {
    path: 'jobmatch',
    component: JobMatchComponent,
},
  // { path: '/jobmatch', loadChildren: './job-match/job-match.module#JobMatchModule' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

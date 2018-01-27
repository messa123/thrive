import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobMatchComponent } from './job-match.component';

const routes: Routes = [
  {
      path: '',
      component: JobMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobMatchRoutingModule { }

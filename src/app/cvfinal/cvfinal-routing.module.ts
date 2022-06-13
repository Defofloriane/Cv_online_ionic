import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvfinalPage } from './cvfinal.page';

const routes: Routes = [
  {
    path: '',
    component: CvfinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvfinalPageRoutingModule {}

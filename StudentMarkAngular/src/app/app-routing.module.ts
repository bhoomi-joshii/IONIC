import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertmarksComponent } from './insertmarks/insertmarks.component';
import { ViewResultComponent } from './view-result/view-result.component';

const routes: Routes = [
  {path: '',component:InsertmarksComponent},
  {path: 'viewResult',component:ViewResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

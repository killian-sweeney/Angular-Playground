import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { TestComponent } from './component/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'list', component: ListComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

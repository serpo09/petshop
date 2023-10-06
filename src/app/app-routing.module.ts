import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './mycomponents/pages/index/index.component';
import { AboutComponent } from './mycomponents/pages/about/about.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "about", component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

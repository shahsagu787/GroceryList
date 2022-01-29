import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {
    path: 'entry',
    component: GroceryListComponent

  },
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full' 
  },
  {
    path: 'history',
    component: HistoryComponent
  },

  {
    path: 'about',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresListComponent } from './stores-list/stores-list.component';
import { StoresAddComponent } from './stores-add/stores-add.component';

const routes: Routes = [
  { path: 'list', component: StoresListComponent },
  { path: 'add', component: StoresAddComponent },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule {}

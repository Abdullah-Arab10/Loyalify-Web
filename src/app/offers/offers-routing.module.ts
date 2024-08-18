import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersAddComponent } from './offers-add/offers-add.component';

const routes: Routes = [
  { path: 'list', component: OffersListComponent },
  { path: 'add', component: OffersAddComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}

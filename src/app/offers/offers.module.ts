import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersAddComponent } from './offers-add/offers-add.component';

@NgModule({
  declarations: [OffersListComponent, OffersAddComponent],
  imports: [CommonModule, OffersRoutingModule, SharedModule],
})
export class OffersModule {}

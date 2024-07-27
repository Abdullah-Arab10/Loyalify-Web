import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [CommonModule, OffersRoutingModule, SharedModule],
})
export class OffersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoresListComponent } from './stores-list/stores-list.component';
import { StoresAddComponent } from './stores-add/stores-add.component';

@NgModule({
  declarations: [StoresListComponent, StoresAddComponent],
  imports: [CommonModule, StoresRoutingModule, SharedModule],
})
export class StoresModule {}

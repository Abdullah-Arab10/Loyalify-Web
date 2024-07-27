import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesAddComponent } from './categories-add/categories-add.component';

@NgModule({
  declarations: [CategoriesListComponent, CategoriesAddComponent],
  imports: [CommonModule, CategoriesRoutingModule, SharedModule],
})
export class CategoriesModule {}

import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ASSETS_IMAGES } from '../../shared/constants/global.constants';
import { Subscription } from 'rxjs';
import { CategoriesModel } from '../../core/models/categories.model';
import { CategoriesService } from '../../core/http/categories.service';
import { GetResponseModel } from '../../core/models/global.model';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesAddComponent } from '../categories-add/categories-add.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  readonly dialog = inject(MatDialog);
  imagesPath = ASSETS_IMAGES;
  categoriesListSub$: Subscription;
  categories: CategoriesModel[] = [];
  columns = [
    { name: 'ID', field: 'id', isDate: false },
    { name: 'Name', field: 'name', isDate: false },
  ];
  constructor(private _categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesListSub$ = this._categoriesService
      .getCategories()
      .subscribe((res: GetResponseModel<CategoriesModel>) => {
        this.categories = res.items;
        console.log(this.categories);
      });
  }
  openDialog() {
    this.dialog.open(CategoriesAddComponent);
  }
  ngOnDestroy(): void {
    this.categoriesListSub$?.unsubscribe();
  }
}

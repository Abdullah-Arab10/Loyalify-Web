import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/http/categories.service';

import { Subscription } from 'rxjs';
import { NotificationService } from '../../core/themes/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrl: './categories-add.component.scss',
})
export class CategoriesAddComponent implements OnInit, OnDestroy {
  categoriesForm: FormGroup;
  categoriesSub$: Subscription;
  constructor(
    private _categoriesService: CategoriesService,
    private _notificationService: NotificationService
  ) {}
  private initCategoryForm() {
    this.categoriesForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  addCategory() {
    this.categoriesForm.markAllAsTouched();
    if (this.categoriesForm.invalid) return;
    console.log(this.categoriesForm.value);
    this.categoriesSub$ = this._categoriesService
      .createCategory(this.categoriesForm.value)
      .subscribe((res) => {
        this._notificationService.showSuccess('category added successfully!');
      });
  }
  ngOnInit(): void {
    this.initCategoryForm();
  }
  ngOnDestroy(): void {
    this.categoriesSub$?.unsubscribe();
  }
}

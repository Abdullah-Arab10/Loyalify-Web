import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/http/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../core/themes/notification.service';

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

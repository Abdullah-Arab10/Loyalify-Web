import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoresService } from '../../core/http/stores.service';
import { NotificationService } from '../../core/themes/notification.service';
import { CategoriesService } from '../../core/http/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores-add',
  templateUrl: './stores-add.component.html',
  styleUrl: './stores-add.component.scss',
})
export class StoresAddComponent implements OnDestroy, OnInit {
  storeForm: FormGroup;
  storeFormData: FormData;
  storeSub$: Subscription;
  coverImage: File | null = null;
  storeImage: File | null = null;

  categories: any[] = [
    { value: 0, viewValue: 'Market' },
    { value: 1, viewValue: 'Store Book' },
    { value: 2, viewValue: 'Resturant' },
  ];
  categories$: Subscription;

  constructor(
    private _storeService: StoresService,
    private _notificationService: NotificationService,
    private _categoriesService: CategoriesService,
    private _router: Router
  ) {}

  private initStoreForm() {
    this.storeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      coverImageFile: new FormControl('', [Validators.required]),
      storeImageFile: new FormControl('', [Validators.required]),
      category: new FormControl(0, [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      pointRation: new FormControl(0, [Validators.required]),

      storeManagerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      storeManagerPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  private getCategories() {
    this.categories$ = this._categoriesService
      .getCategories()
      .subscribe((res: any) => {
        this.categories = res.items;
      });
  }
  ngOnInit(): void {
    this.getCategories();
    this.initStoreForm();
  }
  select(event: File, field: string) {
    if ((field = 'cover')) {
      this.coverImage = event;
    }
    if ((field = 'store')) {
      this.storeImage = event;
    }
  }
  appendFormData() {
    let formValues = this.storeForm.value;
    this.storeFormData = new FormData();
    this.storeFormData.append('name', formValues.name);
    this.storeFormData.append('description', formValues.description);
    this.storeFormData.append('address', formValues.address);
    this.storeFormData.append('phoneNumber', formValues.phoneNumber);
    this.storeFormData.append('pointRation', formValues.pointRation);

    this.storeFormData.append(
      'storeManagerEmail',
      formValues.storeManagerEmail
    );
    this.storeFormData.append(
      'storeManagerPassword',
      formValues.storeManagerPassword
    );
    this.storeFormData.append('categoryId', formValues.category);
    if (this.coverImage)
      this.storeFormData.append('coverImageFile', this.coverImage);
    if (this.storeImage)
      this.storeFormData.append('storeImageFile', this.storeImage);
  }
  submit() {
    this.storeForm.markAllAsTouched();
    if (this.storeForm.invalid) return;
    this.appendFormData();
    this.storeSub$ = this._storeService
      .createStore(this.storeFormData)
      .subscribe((res) => {
        this._notificationService.showSuccess('Store Created Successfully!');
        this._router.navigate(['/stores ']);
      });
  }
  ngOnDestroy(): void {
    this.storeSub$?.unsubscribe();
    this.categories$?.unsubscribe();
  }
}

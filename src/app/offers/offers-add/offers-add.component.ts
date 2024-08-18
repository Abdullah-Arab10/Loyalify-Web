import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OffersService } from '../../core/http/offers.service';
import { StoresService } from '../../core/http/stores.service';
import { NotificationService } from '../../core/themes/notification.service';
import { GetResponseModel } from '../../core/models/global.model';
import { StoreLiteModel } from '../../core/models/stores.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-add',
  templateUrl: './offers-add.component.html',
  styleUrl: './offers-add.component.scss',
})
export class OffersAddComponent implements OnInit, OnDestroy {
  offerForm: FormGroup;
  offerFormData: FormData;
  offerImage: File;
  offerSub$: Subscription;
  storesSub$: Subscription;
  stores: StoreLiteModel[] = [];
  constructor(
    private _offerService: OffersService,
    private _storesService: StoresService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {}
  initOfferForm() {
    this.offerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      pointAmount: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      storeId: new FormControl('', [Validators.required]),
      expiresIn: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(3),
      ]),
      imageFile: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.initOfferForm();
    this.getStores();
  }
  getStores() {
    this.storesSub$ = this._storesService.getStores().subscribe((res: any) => {
      this.stores = res.items;
    });
  }
  selectImage(event: any) {
    this.offerImage = event;
  }
  appendFormData() {
    let formValues = this.offerForm.value;
    this.offerFormData = new FormData();
    this.offerFormData.append('name', formValues.name);
    this.offerFormData.append('description', formValues.description);
    this.offerFormData.append('storeId', formValues.storeId);
    this.offerFormData.append('pointAmount', formValues.pointAmount);
    this.offerFormData.append('expiresIn', formValues.expiresIn);
    if (this.offerImage)
      this.offerFormData.append('imageFile', this.offerImage);
  }
  submit() {
    this.offerForm.markAllAsTouched();
    if (this.offerForm.invalid) return;
    this.appendFormData();
    this._offerService.addOffer(this.offerFormData).subscribe((res: any) => {
      this._notificationService.showSuccess(
        'The offer is addedd successfully!'
      );
      this._router.navigate(['offers/list']);
    });
  }
  ngOnDestroy(): void {}
}

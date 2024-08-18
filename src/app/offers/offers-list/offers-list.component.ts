import { Component, OnDestroy, OnInit } from '@angular/core';
import { ASSETS_IMAGES } from '../../shared/constants/global.constants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OffersService } from '../../core/http/offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.scss',
})
export class OffersListComponent implements OnInit, OnDestroy {
  imagesPath = ASSETS_IMAGES;
  offersSub$: Subscription;
  offers = [];
  columns = [
    { name: 'ID', field: 'id', isDate: false },
    { name: 'Logo', field: 'offerImage', isDate: false, image: true },
    { name: 'Name', field: 'offerName', isDate: false },
    { name: 'Store', field: 'storeName', isDate: false },
    { name: 'Points', field: 'pointAmount', isDate: false },
  ];
  constructor(private _router: Router, private _offersService: OffersService) {}

  navigateToAddOffer() {
    this._router.navigate(['offers/add']);
  }
  ngOnInit(): void {
    this.getOffers();
  }
  getOffers() {
    this.offersSub$ = this._offersService.getOffers().subscribe((res: any) => {
      this.offers = res.items;
    });
  }
  ngOnDestroy(): void {
    this.offersSub$?.unsubscribe();
  }
}

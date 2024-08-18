import { Component, OnDestroy, OnInit } from '@angular/core';
import { ASSETS_IMAGES } from '../../shared/constants/global.constants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.scss',
})
export class OffersListComponent implements OnInit, OnDestroy {
  imagesPath = ASSETS_IMAGES;
  offersSub$: Subscription;
  offers = [];
  constructor(private _router: Router) {}
  navigateToAddOffer() {
    this._router.navigate(['offers/add']);
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}

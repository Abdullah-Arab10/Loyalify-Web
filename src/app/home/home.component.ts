import { Component, OnInit } from '@angular/core';
import { HomeService } from '../core/http/home.service';
import {
  ASSETS_ICONS,
  ASSETS_IMAGES,
} from '../shared/constants/global.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  firstActive = true;
  iconsPath = ASSETS_ICONS;
  imagesPath = ASSETS_IMAGES;
  offers = [];
  stores = [];
  statistics$: Subscription;
  offers$: Subscription;
  stores$: Subscription;
  columns = [
    { name: 'ID', field: 'id', isDate: false },
    { name: 'Logo', field: 'offerImage', isDate: false, image: true },
    { name: 'Name', field: 'offerName', isDate: false },
    { name: 'Store', field: 'storeName', isDate: false },
    { name: 'Points', field: 'pointAmount', isDate: false },
  ];
  stores_columns = [
    { name: 'ID', field: 'id', isDate: false },
    { name: 'Logo', field: 'storeImage', isDate: false, image: true },
    { name: 'Name', field: 'name', isDate: false },
    { name: 'Category', field: 'category', isDate: false },
  ];

  statisticsValues: any;
  constructor(private _homeService: HomeService) {}
  ngOnInit(): void {
    this.getStatistics();
  }
  getStatistics() {
    this.statistics$ = this._homeService
      .getStatistics()
      .subscribe((res: any) => {
        this.statisticsValues = res.items;
      });
    this.stores$ = this._homeService
      .getPopularStores()
      .subscribe((res: any) => {
        this.stores = res.items;
      });
    this.offers$ = this._homeService
      .getPopularOffers()
      .subscribe((res: any) => {
        this.offers = res.items;
      });
  }
  ngOnDestroy(): void {
    this.statistics$.unsubscribe();
    this.offers$.unsubscribe();
    this.stores$.unsubscribe();
  }
}

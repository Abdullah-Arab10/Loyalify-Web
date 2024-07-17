import { Component, OnInit } from '@angular/core';
import { ASSETS_IMAGES } from '../../shared/constants/global.constants';
import { Router } from '@angular/router';
import { StoresService } from '../../core/http/stores.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.scss',
})
export class StoresListComponent implements OnInit {
  imagesPath = ASSETS_IMAGES;
  columns = [
    { name: 'ID', field: 'id', isDate: false },
    { name: 'Logo', field: 'storeImage', isDate: false, image: true },
    { name: 'Name', field: 'name', isDate: false },
    { name: 'Phone', field: 'phoneNumber', isDate: false },
    { name: 'Category', field: 'categoryId', isDate: false },
    { name: 'Address', field: 'address', isDate: false },
    { name: 'Descritption', field: 'description', isDate: false },
  ];
  stores = [];
  constructor(private _router: Router, private _storesService: StoresService) {}
  ngOnInit(): void {
    this.getStores();
  }
  navigateToAddStore() {
    this._router.navigate(['stores/add']);
  }
  getStores() {
    this._storesService.getStores(0, '').subscribe((res: any) => {
      this.stores = res.stores;
    });
  }
}

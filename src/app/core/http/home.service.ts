import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _http: HttpClient) {}

  getStatistics() {
    return this._http.get(BASE_URL + 'Statistics/GetStatistics');
  }
  getPopularOffers() {
    return this._http.get(BASE_URL + 'Offer/GetPopularOffers');
  }
  getPopularStores() {
    return this._http.get(BASE_URL + 'Store/GetPopularStores');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private _http: HttpClient) {}
  addOffer(offerForm: FormData) {
    return this._http.post(BASE_URL + 'Offer/AddOffer', offerForm);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreCreateModel, StoreLiteModel } from '../models/stores.model';
import { BASE_URL } from '../../shared/constants/global.constants';
import { map } from 'rxjs';
import { GetResponseModel } from '../models/global.model';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor(private _http: HttpClient) {}

  createStore(storeForm: FormData) {
    return this._http.post('https://localhost:7236/Store/AddStore', storeForm);
  }
  getStores(CategoryId: number = 0, Search: string = '') {
    let queries = new HttpParams();
    queries.append('CategoryId', CategoryId).append('Search', Search);
    return this._http.get(BASE_URL + 'Store/GetAllStoresAdmin', {
      params: queries,
    });
  }
  getStoresLite(CategoryId: number = 0, Search: string = '') {
    let queries = new HttpParams();
    queries.append('CategoryId', CategoryId).append('Search', Search);
    return this._http.get<GetResponseModel<StoreLiteModel>>(
      BASE_URL + 'Store/GetAllStoresUser',
      {
        params: queries,
      }
    );
  }
  changeStoreStatus(storeId: number) {
    return this._http.post(BASE_URL + 'Store/ChangeStoreState', {
      id: storeId,
    });
  }
}

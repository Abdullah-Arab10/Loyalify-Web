import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _http: HttpClient) {}

  createCategory() {}
  getCategories() {
    return this._http.get(BASE_URL + 'Category/GetCategories');
  }
}

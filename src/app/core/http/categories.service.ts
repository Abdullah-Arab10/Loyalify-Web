import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/constants/global.constants';
import { Observable } from 'rxjs';
import { GetResponseModel } from '../models/global.model';
import { CategoriesModel } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _http: HttpClient) {}

  createCategory(categoryForm: any) {
    return this._http.post(BASE_URL + 'Category/AddCategory', categoryForm);
  }
  getCategories() {
    return this._http.get<GetResponseModel<CategoriesModel>>(
      BASE_URL + 'Category/GetCategories'
    );
  }
}

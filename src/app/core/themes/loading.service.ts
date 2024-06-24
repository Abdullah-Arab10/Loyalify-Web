import {Injectable} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject(true);
  loading$ = this.loadingSubject.asObservable();
  constructor(private spinner: NgxSpinnerService) {}

  showLoader() {
    this.spinner.show();
    this.loadingSubject.next(true);
  }
  hideLoader() {
    this.spinner.hide();
    this.loadingSubject.next(false);
  }
}

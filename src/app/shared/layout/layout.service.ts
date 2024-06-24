import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isMobileSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  isMobile$ = this.isMobileSubject.asObservable();
  private isMobileMenuSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  isMobileMenu$ = this.isMobileMenuSubject.asObservable();
  constructor(private breakpointObserver: BreakpointObserver) {}
  toggleMobileMenu() {
    this.isMobileMenuSubject.next(!this.isMobileMenuSubject.value);
  }
  layoutObserver() {
    this.breakpointObserver
      .observe([
        CUSTOM_MEDIA_QUERIES.mobile,
        CUSTOM_MEDIA_QUERIES.midScreen,
        CUSTOM_MEDIA_QUERIES.largeScreen,
        CUSTOM_MEDIA_QUERIES.wideScreen,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (this.breakpointObserver.isMatched(CUSTOM_MEDIA_QUERIES.mobile)) {
            console.log('mobile screen');
            this.isMobileSubject.next(true);
          }
          if (!this.breakpointObserver.isMatched(CUSTOM_MEDIA_QUERIES.mobile)) {
            console.log('not mobile screen');
            this.isMobileSubject.next(false);
          }
          if (
            this.breakpointObserver.isMatched(CUSTOM_MEDIA_QUERIES.midScreen)
          ) {
            console.log('mid screen');
          }
          if (
            this.breakpointObserver.isMatched(CUSTOM_MEDIA_QUERIES.largeScreen)
          ) {
            console.log('large screen');
          } else if (
            this.breakpointObserver.isMatched(CUSTOM_MEDIA_QUERIES.wideScreen)
          ) {
            console.log('wide screen');
          }
        }
      });
  }
}
const CUSTOM_MEDIA_QUERIES = {
  mobile: '(max-width: 767px)',
  midScreen: '(min-width: 768px) and (max-width: 1024px)',
  largeScreen: '(min-width: 1025px) and (max-width: 1179px)',
  wideScreen: '(min-width: 1180px)',
};

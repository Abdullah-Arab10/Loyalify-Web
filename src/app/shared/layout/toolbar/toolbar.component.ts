import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { ASSETS_ICONS, ASSETS_IMAGES } from '../../constants/global.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  menu = false;
  isMobile = false;
  ASSETS_ICONS: string = ASSETS_ICONS;
  ASSETS_IMAGES: string = ASSETS_IMAGES;
  isMobile$: Subscription;
  constructor(private layoutService: LayoutService) {}
  ngOnInit() {
    this.layoutService.layoutObserver();
    this.isMobileObserver();
  }
  logout() {
    //this.authService.logout();
  }
  toggleMenu() {
    this.menu = !this.menu;
  }
  openSidebar() {
    //this.layoutService.openSidebar();
  }
  isMobileObserver() {
    this.isMobile$ = this.layoutService.isMobile$.subscribe((res) => {
      this.isMobile = res;
    });
  }
  toggleMobileMenu() {
    this.layoutService.toggleMobileMenu();
  }
  ngOnDestroy(): void {
    this.isMobile$.unsubscribe();
  }
}

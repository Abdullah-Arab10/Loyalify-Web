import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ASSETS_ICONS, ASSETS_IMAGES } from '../../constants/global.constants';
import { LayoutService } from '../layout.service';
import { Subscription } from 'rxjs';
import { sidebarInsights, sidebarTools } from '../layout.data';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isMobile = false;
  isMobileMenuOpen = false;
  ASSETS_ICONS: any = ASSETS_ICONS;
  isMobile$: Subscription;
  isMobileMenuOpen$: Subscription;
  sidebarTools = sidebarTools;
  sidebarInsights = sidebarInsights;
  constructor(private layoutService: LayoutService) {}
  ngOnInit() {
    this.layoutService.layoutObserver();
    this.isMobileObserver();
    this.isMobileMenuObserver();
  }
  isExpanded = true;
  toggleSidebar() {
    this.isMobile = !this.isMobile;
  }
  isMobileObserver() {
    this.isMobile$ = this.layoutService.isMobile$.subscribe((res) => {
      this.isMobile = res;
      if (this.isMobile) this.isExpanded = true;
    });
  }
  isMobileMenuObserver() {
    this.isMobileMenuOpen$ = this.layoutService.isMobileMenu$.subscribe(
      (res) => {
        this.isMobileMenuOpen = res;
      }
    );
  }
  /*   modeEvent(): any {
    console.log('tsstset');
    if (this.isMobile) {
      this.isMobileMenuOpen = false;
      this.isExpanded = false;
      return 'push';
    } else {
      this.isExpanded = true;
      return 'side';
    }
  } */
  ngOnDestroy(): void {
    this.isMobile$.unsubscribe();
    this.isMobileMenuOpen$.unsubscribe();
  }
}

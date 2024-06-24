import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { LoadingService } from './core/themes/loading.service';
import { Subscription } from 'rxjs';
import { AuthService } from './core/http/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, AuthModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Loyalify';
  loggedIn: boolean = false;
  loginSub$: Subscription;
  loading: boolean = true;
  loadingSub$: Subscription;

  constructor(
    private _loadingService: LoadingService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadingSub$ = this._loadingService.loading$.subscribe(
      (res) => (this.loading = res)
    );
    this.authStatus();
  }
  private authStatus() {
    this.loginSub$ = this._authService.loggedInObservable.subscribe(
      (res) => (this.loggedIn = res)
    );
  }
  ngOnDestroy(): void {
    this.loadingSub$.unsubscribe();
    this.loginSub$.unsubscribe();
  }
}

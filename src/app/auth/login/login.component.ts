import { Component, OnInit } from '@angular/core';
import {
  ASSETS_ICONS,
  ASSETS_IMAGES,
} from '../../shared/constants/global.constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/http/auth.service';
import { NotificationService } from '../../core/themes/notification.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  IconsPath = ASSETS_ICONS;
  ImagesPath = ASSETS_IMAGES;
  LoginFormGroup: FormGroup;
  constructor(
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.LoginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    this.LoginFormGroup.markAllAsTouched();
    if (this.LoginFormGroup.invalid) return;
    this._authService.login(this.LoginFormGroup.value).subscribe((res: any) => {
      const tokenInfo: any = jwtDecode(res.token);
      localStorage.setItem('token', res?.token);
      localStorage.setItem('role', tokenInfo?.role);
      if (tokenInfo?.role != 'Admin') {
        this._notificationService.showWarning('Sorry You are not Authorized!');
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
}

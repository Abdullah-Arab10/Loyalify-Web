import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './components/button/button.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { InputComponent } from './components/input/input.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { SelectComponent } from './components/select/select.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ButtonComponent,
    CardTitleComponent,
    InputComponent,
    TitleComponent,
    SpinnerComponent,
    ImageUploaderComponent,
    SelectComponent,
    TableComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    NgxSpinnerModule,

    HttpClientModule,
    FormsModule,
    RouterModule,
    TableModule,
    MatSidenavModule,
    MatToolbarModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    ReactiveFormsModule,
    SpinnerComponent,
    AngularSvgIconModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ImageUploaderComponent,
    TableComponent,
    SidebarComponent,
    InputComponent,
    ButtonComponent,
    CardTitleComponent,
    MatIconModule,
    SelectComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

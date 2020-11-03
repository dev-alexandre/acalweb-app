import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule
} from '@nebular/theme';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NgxLoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbEvaIconsModule,
    NbAuthModule,
    NbIconModule,
    NbFormFieldModule,
  ],
  declarations: [
    NgxLoginComponent
  ],
})
export class NgxAuthModule {
}

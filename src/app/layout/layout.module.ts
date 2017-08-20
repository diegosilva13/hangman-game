import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    BodyComponent
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    RouterModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }

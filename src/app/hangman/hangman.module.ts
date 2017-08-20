import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {HangmanComponent} from './hangman.component';
import {HangmanRoutingModule} from './hangman-routing.module';
import {HumanBodyService} from './human/shared/human-body.service';
import {HumanComponent} from './human/human.component';
import {GallowsComponent} from './gallows/gallows.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    HangmanRoutingModule
  ],
  declarations: [
    HangmanComponent,
    GallowsComponent,
    HumanComponent
  ],
  providers: [
    HumanBodyService
  ],
  exports: [
    GallowsComponent,
    CommonModule,
    HumanComponent
  ]
})
export class HangmanModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {HangmanComponent} from './hangman.component';
import {HangmanRoutingModule} from './hangman-routing.module';
import {GallowsService} from './gallows/shared/gallows.service';
import {GallowsComponent} from './gallows/gallows.component';
import {GallowsFactory} from './gallows/shared/gallows-builder/gallows.factory';

@NgModule({
  imports: [
    CommonModule,
    HangmanRoutingModule
  ],
  declarations: [
    HangmanComponent,
    GallowsComponent
  ],
  providers: [
    GallowsService,
    GallowsFactory
  ],
  exports: [
    GallowsComponent,
    CommonModule,
  ]
})
export class HangmanModule { }

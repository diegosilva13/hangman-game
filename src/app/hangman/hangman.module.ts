import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {HangmanComponent} from './hangman.component';
import {HangmanRoutingModule} from './hangman-routing.module';
import {GallowsService} from './gallows/shared/gallows.service';
import {GallowsComponent} from './gallows/gallows.component';
import {GallowsFactory} from './gallows/shared/gallows-builder/gallows.factory';
import {HangmanService} from './shared/hangman.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HangmanRoutingModule,
    FormsModule
  ],
  declarations: [
    HangmanComponent,
    GallowsComponent
  ],
  providers: [
    GallowsService,
    GallowsFactory,
    HangmanService
  ],
  exports: [
    GallowsComponent,
    CommonModule,
  ]
})
export class HangmanModule { }

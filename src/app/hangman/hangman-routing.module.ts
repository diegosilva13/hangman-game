import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HangmanComponent} from './hangman.component';

const routes: Routes = [
  {path: '', component: HangmanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangmanRoutingModule {
}

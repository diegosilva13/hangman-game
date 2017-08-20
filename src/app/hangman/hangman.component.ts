import {Component, OnInit, ViewChild} from '@angular/core';
import {HangmanService} from './shared/hangman.service';
import {GallowsComponent} from "./gallows/gallows.component";
import {isUndefined} from "util";

@Component({
  templateUrl: 'hangman.component.html'
})
export class HangmanComponent implements OnInit {

  letter: '';
  letters: Array<string>;
  wordSelected: string;
  errors: Array<string> = new Array();
  errorMessage = '';
  successMessage = '';

  @ViewChild(GallowsComponent) gallowsComponent;

  constructor(private hangmanService: HangmanService) { }

  ngOnInit() {
    this.newWord();
  }


  play(): void {
    try {
      this.errorMessage = '';
      this.hangmanService.isValidLetter(this.letter, this.errors);
      const correct = this.hangmanService.fill(this.letter, this.wordSelected, this.letters);
      if (!correct) {
        this.errors[this.errors.length] = this.letter;
        this.gallowsComponent.update();
      } else {
        if (this.letters.filter(l => isUndefined(l)).length === this.wordSelected.length) {
          this.successMessage = 'You Win!';
          this.newWord();
          return;
        }
      }
      this.letter = '';
    }catch (e) {
      this.errorMessage = e.message;
    }
  }

  newWord(): void{
    this.wordSelected = this.hangmanService.getWord();
    this.letters = new Array<string>(this.wordSelected.length);
    this.errors = new Array<string>();
    this.errorMessage = '';
    this.gallowsComponent.start();
  }

  finishGame(message: string): void {
    this.newWord();
    this.errorMessage = message;
  }
}

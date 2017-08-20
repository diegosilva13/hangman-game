import {Injectable} from '@angular/core';
import {isNumber, isUndefined} from 'util';
import {WORDS} from './hangman-words';

@Injectable()
export class HangmanService {

  constructor() {}

  isValidLetter(letter: string, errors: Array<string>): void {
    if (isUndefined(letter) || isNumber(letter)) {
      throw Error('Invalid letter.');
    }

    if (errors.indexOf(letter) !== -1) {
      throw Error('Invalid letter.');
    }
  }

  getWord(): string {
    const index = Math.floor(Math.random() * WORDS.length);
    return WORDS[index];
  }

  fill(letter: string, wordSelected: string, letters: Array<string>): boolean {
    let correct = false;
    for (let i = 0; i < wordSelected.length; i++) {
      if (wordSelected.charAt(i).toUpperCase() === letter.toUpperCase()) {
        letters[i] = letter;
        correct = true;
      }
    }
    return correct;
  }
}

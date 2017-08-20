import {IGallowsParts} from './igallows-parts';

export class Gallows implements IGallowsParts {

  constructor() {}

  imageLocation(): string {
    return '../../../../assets/hangman/gallows.png';
  }
}

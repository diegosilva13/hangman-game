import {IGallowsParts} from './igallows-parts';

export class Head implements IGallowsParts {

  constructor() {}

  imageLocation(): string {
    return '../../../../assets/hangman/head.png';
  }
}

import {IGallowsParts} from './igallows-parts';

export class Torso implements IGallowsParts{

  imageLocation(): string {
    return '../../../../assets/hangman/torso.png';
  }
}

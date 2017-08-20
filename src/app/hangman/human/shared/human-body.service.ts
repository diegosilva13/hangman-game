import {Injectable} from '@angular/core';

import {IHumanBodyPart} from './human-body/ihuman-body-part';
import {HumanBodyFactory} from './human-body/human-body.factory';
import {isUndefined} from "util";

@Injectable()
export class HumanBodyService {

  private parts: Array<IHumanBodyPart>;

  constructor(private humanBodyFactory: HumanBodyFactory) {}

  addBodyPart(parts: Array<IHumanBodyPart>): Array<IHumanBodyPart> {

    if (isUndefined(parts)){
      parts = new Array<IHumanBodyPart>();
    }

    this.addPart(parts);

    return parts;
  }


  private addPart(parts: Array<IHumanBodyPart>) {
    this.humanBodyFactory.getParts().forEach((value) => {
      if (parts.indexOf(value) === -1) {
        parts.push(value);
        return;
      }
    });
  }
}

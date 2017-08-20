import {Injectable} from '@angular/core';

import {IHumanBodyPart} from './ihuman-body-part';
import {Head} from './head';
import {Torso} from './torso';
import {LeftArm} from './left-arm';
import {LeftFoot} from './left-foot';
import {RightArm} from './right-arm';
import {RightFoot} from './right-foot';

@Injectable()
export class HumanBodyFactory {

  public getParts(): Array<IHumanBodyPart> {
    const parts: Array < IHumanBodyPart > = new Array<IHumanBodyPart>();
    parts.push(new Head());
    parts.push(new Torso());
    parts.push(new LeftArm());
    parts.push(new LeftFoot());
    parts.push(new RightArm());
    parts.push(new RightFoot())
    return parts;
  }


}

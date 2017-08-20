import {Injectable} from '@angular/core';

import {IGallowsParts} from './igallows-parts';
import {Head} from './head';
import {Torso} from './torso';
import {LeftArm} from './left-arm';
import {LeftFoot} from './left-foot';
import {RightArm} from './right-arm';
import {RightFoot} from './right-foot';
import {Gallows} from './gallows';

@Injectable()
export class GallowsFactory {

  public getParts(): Array<IGallowsParts> {
    const parts: Array < IGallowsParts > = new Array<IGallowsParts>();
    parts.push(new RightArm());
    parts.push(new RightFoot());
    parts.push(new LeftFoot());
    parts.push(new LeftArm());
    parts.push(new Torso());
    parts.push(new Head());
    parts.push(new Gallows());
    return parts;
  }


}

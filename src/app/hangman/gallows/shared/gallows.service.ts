import {Injectable} from '@angular/core';
import {isUndefined} from 'util';

import {IGallowsParts} from './gallows-builder/igallows-parts';
import {GallowsFactory} from './gallows-builder/gallows.factory';

@Injectable()
export class GallowsService {

  constructor(private gallowsFactory: GallowsFactory) {}

  public getAllParts(): Array< IGallowsParts > {
    return this.gallowsFactory.getParts();
  }

  topOf(gallowsParts: Array<IGallowsParts>) : IGallowsParts{
    return gallowsParts.pop();
  }
}

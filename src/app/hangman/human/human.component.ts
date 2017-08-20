import {Component, OnInit} from '@angular/core';
import {HumanBodyService} from './shared/human-body.service';
import {IHumanBodyPart} from './shared/human-body/ihuman-body-part';

@Component({
  selector: 'app-human',
  template: 'human.component.html'
})
export class HumanComponent implements OnInit {

  private bodyParts: Array< IHumanBodyPart > ;

  constructor(private humanBodyService: HumanBodyService) {}

  ngOnInit(): void {
  }

  public update(): void {
    this.bodyParts = this.humanBodyService.addBodyPart(this.bodyParts);
  }
}

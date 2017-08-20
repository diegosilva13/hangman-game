import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GallowsService} from './shared/gallows.service';
import {IGallowsParts} from './shared/gallows-builder/igallows-parts';

@Component({
  selector: 'app-gallows',
  templateUrl: './gallows.component.html'
})
export class GallowsComponent implements OnInit {

  private gallowsParts: Array< IGallowsParts > ;

  public part: IGallowsParts;

  @Output() public finishGame: EventEmitter<string> = new EventEmitter();

  constructor(private gallowsService: GallowsService) {}

  ngOnInit(): void {
    this.start();
  }

  start(): void {
    this.gallowsParts = this.gallowsService.getAllParts();
    this.part = this.gallowsService.topOf(this.gallowsParts);
  }

  public update(): void {
    this.part = this.gallowsService.topOf(this.gallowsParts);
    if (this.gallowsParts.length === 0) {
      this.finishGame.emit('You lose!');
    }
  }
}

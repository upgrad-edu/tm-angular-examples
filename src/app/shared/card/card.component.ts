import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import { Card } from './card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input('data') data: Card;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

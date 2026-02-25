import { Component, input } from '@angular/core';
import { Gif } from '../../../../interfaces';

@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.html',
})
export class GifItem {
  gif = input.required<Gif>();
}

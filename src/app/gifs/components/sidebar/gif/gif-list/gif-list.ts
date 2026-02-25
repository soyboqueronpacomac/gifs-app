import { imageUrls } from './../../../../interfaces/imageUrls.interface';
import { Component, input } from '@angular/core';
import { GifItem } from "../gif-item/gif-item";

@Component({
  selector: 'gif-list',
  imports: [GifItem],
  templateUrl: './gif-list.html',
})
export class GifList {
  imageUrls = input.required<string[]>();
}

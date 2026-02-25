import { Component, signal } from '@angular/core';
import { GifList } from "../../components/sidebar/gif/gif-list/gif-list";
import { imageUrls } from '../../interfaces/imageUrls.interface';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  imageUrls = signal<string[]>(imageUrls)
}

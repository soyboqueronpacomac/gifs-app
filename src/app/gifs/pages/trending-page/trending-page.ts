import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/sidebar/gif/gif-list/gif-list";

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {

  gifsService = inject(GifsService);
}

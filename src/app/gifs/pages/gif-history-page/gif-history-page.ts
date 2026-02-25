import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifList } from "../../components/sidebar/gif/gif-list/gif-list";

@Component({
  selector: 'gif-history-page',
  imports: [GifList],
  templateUrl: './gif-history-page.html',
})
export default class GifHistoryPage {
  gifsService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query'])
    )
  );
  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));
}

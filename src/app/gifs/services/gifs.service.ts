import { GWOFileTypesTrue } from './../../../../node_modules/@npmcli/package-json/node_modules/glob/dist/commonjs/walker.d';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import type { Gif, GiphyResponse } from '../interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const history = localStorage.getItem('searchHistory');
  return history ? JSON.parse(history) : {};
}
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private readonly API_KEY = import.meta.env.NGX_GIPHY_API_KEY;
  private readonly BASE_URL = import.meta.env.NGX_GIPHY_BASE_URL;
  private readonly http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));
  saveToLocalStorage = effect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()));
  })
  constructor() {
    this.loadTreadingGifs();
   }
  loadTreadingGifs(): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${this.BASE_URL}/gifs/trending`, {
      params: {
        api_key: this.API_KEY,
        limit: 20,
      },
    }).pipe(
      map((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({gifs});
        return gifs;
      })
    );
  }
  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${this.BASE_URL}/gifs/search`, {
      params: {
        api_key: this.API_KEY,
        q: query,
        limit: 20,
      },
    })
      .pipe(
        map(({ data }) => GifMapper.mapGiphyItemsToGifs(data)),
        tap( items => {
          this.searchHistory.update( history => ({
            ...history,
            [query.toLocaleLowerCase().trim()]: items,
          }))
        })
      );
  }
  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query.toLocaleLowerCase().trim()] || [];
  }

}

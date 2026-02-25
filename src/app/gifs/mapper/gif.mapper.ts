import { Gif, GyphyItem } from '../interfaces';

export class GifMapper {
  static mapGiphyItemToGif(item: GyphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }
  static mapGiphyItemsToGifs(items: GyphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}

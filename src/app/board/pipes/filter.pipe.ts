import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: CardModel.ICardList[], criterion: string): CardModel.ICardList[] {
    return criterion
      ? value.filter((item: { name: string }) => item.name.toLowerCase().includes(criterion.toLowerCase()))
      : value;
  }

}

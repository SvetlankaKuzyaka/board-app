import { Pipe, PipeTransform } from '@angular/core';
import { ICardList } from '../models/Card';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICardList[], criterion: string): ICardList[] {
    return criterion
      ? value.filter((item: { name: string }) => item.name.toLowerCase().includes(criterion.toLowerCase()))
      : value;
  }

}

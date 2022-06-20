import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFormat',
})
export class ListFormatPipe implements PipeTransform {
  transform(textList: string): string {
    const formatter = new Intl.ListFormat('en');
    if (formatter) {
      return formatter.format(textList.split(','));
    }
    return textList;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Intl {
  type ListType = 'conjunction' | 'disjunction';

  interface ListFormatOptions {
    localeMatcher?: 'lookup' | 'best fit';
    type?: ListType;
    style?: 'long' | 'short' | 'narrow';
  }

  interface ListFormatPart {
    type: 'element' | 'literal';
    value: string;
  }

  class ListFormat {
    constructor(locales?: string | string[], options?: ListFormatOptions);
    format(values: any[]): string;
    formatToParts(values: any[]): ListFormatPart[];
    supportedLocalesOf(
      locales: string | string[],
      options?: ListFormatOptions
    ): string[];
  }
}

/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/

import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment-es6';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/*
This pipe will format a date and convert it to UTC unless 'forceUtc' parameter
is set to false. If the date is empty, null, or invalid it will return 'defaultVal'
*/
@Pipe({
  name: 'agsDateFormat'
})
export class DateFormatPipe implements PipeTransform {

  static format: string = 'YYYY-MM-DD HH:mm:ss';

  transform(theDate: moment.Moment | Date | string, defaultVal: string = 'n/a', forceUtc: boolean = true): string {
    if (!moment(theDate).isValid()) {
      return defaultVal;
    }

    if (forceUtc) {
      return moment.utc(theDate).format(DateFormatPipe.format).toUpperCase();
    } else {
      return moment(theDate).format(DateFormatPipe.format + ' ZZ').toUpperCase();
    }
  }
}

@Pipe({
  name: 'trunc'
})
export class TruncatePipe implements PipeTransform {
  transform(s: string): string {
    if (!s) {
      return '';
    }
    if (s.length < 100) {
      return s;
    }
    return s.slice(0, 99) + '...';
  }
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array, asc = true) {

    if (asc) { // ascending
      return Array.from(array).sort((item1: string, item2: string) => {
        return this.orderByComparator(item1, item2);
      });
    } else { // descending
      return Array.from(array).sort((item1: string, item2: string) => {
        return this.orderByComparator(item2, item1);
      });
    }

  }

  orderByComparator(a: string, b: string): number {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }
}

// NOTE:  Adds class "search-highlight" to span containing search term.
@Pipe({
   name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(public sanitizer: DomSanitizer) {}

  transform(text: string, searchTerms): SafeHtml {
    if (searchTerms && text) {
      let s = searchTerms;

      if (Array.isArray(searchTerms)) {
        if (searchTerms.length === 0) {
          return text;
        }
        s = searchTerms.join(' ');
      }
      
      let pattern = s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t) => {
          return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');

      text = text.replace(/ /g, '&nbsp');
      return this.sanitizer.bypassSecurityTrustHtml(
          text.replace(regex, (match) => `<span class="search-highlight">${match}</span>`)
      );
    } 
    else {
      return text;
    }
  }
}

// Removes an item from a list (array) of items.  Mostly used to remove a string
// from a list, it will also work to remove an object from a list of objects
// as long as there is a 'name' property on the object
@Pipe({
  name: 'remove'
})
export class RemoveItemPipe implements PipeTransform {

  // Returns an array of items
  transform(items: any[], itemToRemove: any): any[] {
    if (!Array.isArray(items)) {
      return items;
    }

    if (Array.isArray(items) && items.length === 0) {
      return items;
    }

    if (typeof items[0] === 'string') {
      return items.filter(item => 
        item.localeCompare(itemToRemove) !== 0
      );
    }
    else if (items[0].hasOwnProperty('name') && itemToRemove.hasOwnProperty('name')) {
      return items.filter(item => 
        item.name.localeCompare(itemToRemove.name) !== 0
      );
    }
  }

}

export const CustomPipes = {
  DateFormatPipe,
  TruncatePipe,
  OrderByPipe,
  RemoveItemPipe
};

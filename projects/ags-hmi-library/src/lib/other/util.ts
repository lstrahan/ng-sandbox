/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/

export class Util {

  /****************************************************************************
   * GEnerate Guid
   ****************************************************************************/
  static newGuid() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16).toUpperCase();
    });
    return uuid;
  }

  /****************************************************************************
   * Takes a variable list of strings and combines them into a valid url. This
   * function will avoid the problem of missing or extra '/' characters.
   * Example:
   *    input: 'http://www.google.com/', '/string1/', /string2', 'string3'
   *    output: 'http://www.google.com/string1/string2/string3'
   ****************************************************************************/
  static urlJoin(...strArray: string[]) {
    let resultArray = [];

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      let first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (let i = 0; i < strArray.length; i++) {
      let component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    let str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    let parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');

    return str;
  }

  /****************************************************************************
   * This function can be used to override the console.log function to turn off
   * all messages for production, or intercept the console.log function to do
   * some additional processing.
   ****************************************************************************/
  static overrideConsole() {
    let console = window.console;
    if (!console) { return; }
    function intercept(method) {
      let original = console[method];
      console[method] = function () {
        // do sneaky stuff
        if (original.apply) {
          // Do this for normal browsers
          original.apply(console, arguments);
        } else {
          // Do this for IE
          let message = Array.prototype.slice.apply(arguments).join(' ');
          original(message);
        }
      };
    }
    let methods = ['log', 'warn', 'error'];
    for (let i = 0; i < methods.length; i++) {
      intercept(methods[i]);
    }
  }

  /****************************************************************************
   * Get color based on priorty value
   ****************************************************************************/
  getPriorityColor(priority) {
    let color = 'inherit';

    switch (priority) {
      case priority <= 99:
        color = '#155eab';
        break;
      case priority >= 100 && priority <= 199:
        color = '#9295ca';
        break;
      case priority >= 200 && priority <= 299:
        color = '#ad6fae';
        break;
      case priority >= 300 && priority <= 399:
        color = '#f37b44';
        break;
      case priority >= 400 && priority <= 499:
        color = '#fed501';
        break;
      case priority >= 500 && priority <= 599:
        color = '#e36662';
        break;
      case priority >= 600 && priority <= 699:
        color = '#81b5dd';
        break;
      case priority >= 700 && priority <= 799:
        color = '#aab0b0';
        break;
      case priority >= 800 && priority <= 899:
        color = '#ceb28b';
        break;
      case priority >= 900 && priority <= 999:
        color = '#9dcab3';
        break;
      default:
        color = 'inherit';
    }

    return color;
  }

  /****************************************************************************
   * Get the best contrasting color, either black or white, for given input color.
   * Parameters:
   *    color: hex color such as '#FF0077'
   ****************************************************************************/
  contrastColor(color) {
    // Counting the perceptive luminance
    // human eye favors green color...
    let rgb = this.hexToRgb(color);
    let a = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    if (a < 0.5) {
      return '#000000';
    } else {
      return '#ffffff';
    }
  }

  colorFromRgb(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}


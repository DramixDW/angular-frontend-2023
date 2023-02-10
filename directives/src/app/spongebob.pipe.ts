import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args);
    let result = '';
    for (let letterIndex = 0; letterIndex < value.length; letterIndex++) {
        const letter = value.charAt(letterIndex);
        const toUppercase = Math.round(Math.random()) === 1 ? true : false;
        if (toUppercase) {
          result += letter.toUpperCase();
        } else {
          result += letter.toLowerCase();
        }
    }
    return result;
  }

}

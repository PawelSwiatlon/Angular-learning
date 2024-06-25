import { Pipe, PipeTransform } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Pipe({
  standalone: true,
  name: 'twMerge',
})
export class TwMergePipe implements PipeTransform {
  transform(classes: string, ...args: string[]) {
    return twMerge(classes, ...args);
  }
}

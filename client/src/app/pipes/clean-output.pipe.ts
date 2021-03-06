import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cleanoutput'})
export class CleanOutput implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/[^a-zA-Z ]/g, " ");
  }
}
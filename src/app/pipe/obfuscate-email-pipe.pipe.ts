import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfuscateEmail',
  standalone: true
})
export class ObfuscateEmailPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('@', ' [at] ').replace('.', ' [dot] ');
  }

}

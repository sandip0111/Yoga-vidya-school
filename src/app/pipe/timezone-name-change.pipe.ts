import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezoneNameChange',
  standalone: true,
})
export class TimezoneNameChangePipe implements PipeTransform {
  transform(value: string): unknown {
    const timeZoneArr = value.split('/');
    let resZone = value;
    if (timeZoneArr?.length > 0) {
      resZone = timeZoneArr.join(' - ');
    }
    return resZone;
  }
}

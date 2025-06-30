import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import moment from 'moment-timezone';
import { TimezoneNameChangePipe } from '../../pipe/timezone-name-change.pipe';
import * as ct from 'countries-and-timezones';
@Component({
  selector: 'app-world-clock',
  standalone: true,
  imports: [CommonModule, FormsModule, TimezoneNameChangePipe],
  templateUrl: './world-clock.component.html',
  styleUrl: './world-clock.component.css',
})
export class WorldClockComponent implements OnInit {
  @Input() date: string = '';
  @Input() startTime: string = '';
  @Input() endTime: string = '';
  timeZones: string[] = [];
  selectedZone: string = 'Asia/Kolkata';
  baseTimeIST: string = '';
  convertedStartTime: string = '';
  convertedEndTime: string = '';
  formattedDate: string = '';
  timeZoneAbbreviation: string = '';
  timeZonesWithCountries: timeZoneModel[] = [];
  ngOnInit(): void {
    this.convertedStartTime = this.updateTime(
      this.selectedZone,
      this.startTime
    );
    this.convertedEndTime = this.updateTime(this.selectedZone, this.endTime);
    const timezones = moment.tz.names();
    const countryTimezones: timeZoneModel[] = [];
    for (const countryCode in ct.getAllCountries()) {
      const country = ct.getCountry(countryCode);
      if (country && country.timezones) {
        country.timezones.forEach((tz) => {
          if (timezones.includes(tz)) {
            countryTimezones.push({ country: country.name, timezone: tz });
          }
        });
      }
    }
    this.timeZonesWithCountries = countryTimezones;
  }

  updateTime(zone: string, time: string) {
    let convertedTime;
    if (!this.date || !time) {
      this.baseTimeIST = 'Invalid input';
      convertedTime = '';
      return convertedTime;
    }
    const dateTimeStr = `${this.date} ${time}`;
    const base = moment.tz(dateTimeStr, 'YYYY-MM-DD hh:mm A', 'Asia/Kolkata');
    if (!base.isValid()) {
      this.baseTimeIST = 'Invalid time format';
      convertedTime = '';
      return convertedTime;
    }
    const converted = base.clone().tz(this.selectedZone);
    this.timeZoneAbbreviation = converted.format('z');
    convertedTime = base.clone().tz(zone).format('hh:mm A');
    return convertedTime;
  }
  onZoneChange() {
    this.convertedStartTime = this.updateTime(
      this.selectedZone,
      this.startTime
    );
    this.convertedEndTime = this.updateTime(this.selectedZone, this.endTime);
  }
}
interface timeZoneModel {
  country: string;
  timezone: string;
}

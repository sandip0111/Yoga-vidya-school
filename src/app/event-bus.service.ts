import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventSubject = new Subject<{ event: string; data?: any }>();
  constructor() { }

  

  // Observable for subscribers to listen
  on(eventName: string, callback: (data: any) => void): void {
    this.eventSubject.subscribe({
      next: ({ event, data }) => {
        if (event === eventName) {
          callback(data);
        }
      }
    });
  }

  // Method to publish an event
  emit(eventName: string, data?: any): void {
    this.eventSubject.next({ event: eventName, data });
  }

}

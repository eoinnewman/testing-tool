import { Injectable } from '@angular/core';
import { eventWithTime, event } from '@rrweb/types';
import { session } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //sharedData: eventWithTime[] = [];
  sharedData : session = new session;
}
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { eventWithTime, event } from '@rrweb/types';
import { record, Replayer, ReplayerEvents } from 'rrweb';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { SharedService } from './services/shared.service';
import { v4 as uuidv4 } from 'uuid';
import { session } from './model/session';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'testing-tools';
  events : any;
  errorsArray : any = [];
  replayer : any;
  items: any;
  sessionId: any;
  session: session = new session;

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.sessionId = uuidv4();
    this.items = [
      {label:'Test Page', routerLink:'/testing-page'},
      {label:'Dashboard', routerLink:'/testing-dashboard'}
    ]
    this.startRecording();
  }  

  startRecording(){
    let events: eventWithTime[] = []
    record({
      checkoutEveryNms: 20 * 500,
      emit : (event, isCheckout) => {
        if (isCheckout) {
          this.saveError()
          events = []
        }else{
          events.push(event);
        }
      }
    });
    this.events = events;
  }

  error(): void{
    this.saveError();
  }

  saveError(){
    this.errorsArray.push(this.events)
    this.session.id = this.sessionId;
    this.session.events = this.errorsArray
    this.sharedService.sharedData = this.session;
    //TODO add to db or update db here

    this.events = [];
    this.startRecording();
  }
}

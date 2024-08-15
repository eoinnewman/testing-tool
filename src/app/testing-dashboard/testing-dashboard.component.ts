import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { eventWithTime, event } from '@rrweb/types';
import { record, Replayer, ReplayerEvents} from 'rrweb';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { Button, ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import rrwebPlayer from 'rrweb-player';
import { DialogModule } from 'primeng/dialog';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import 'rrweb-player/dist/style.css';
import { replayDialog } from '../dialog/replay.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-testing-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule, PanelModule, DialogModule, CardModule],
  templateUrl: './testing-dashboard.component.html',
  styleUrl: './testing-dashboard.component.scss',
  providers: [DialogService]
})
export class TestingDashboardComponent implements OnInit {
  errorsArray : any = [];
  replayer : any;
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService,private sharedService: SharedService) {}

  ngOnInit(): void {
    this.errorsArray = this.sharedService.sharedData.events;
  }

  show(item: eventWithTime[]) {
    this.ref = this.dialogService.open(replayDialog, {
        header: 'Replay',
        width: '80%',
        data: { replay: item },
        modal:true,
        contentStyle: {"overflow": "auto"},
        baseZIndex: 10000
    });
  }

  playError(item: eventWithTime[]){
    if(this.replayer!=undefined){
      this.replayer.$destroy();
    }
    let events = item
    let elememt = document.getElementById("player")!
    this.replayer = new rrwebPlayer({
      target: elememt,
      props: {
        events,
        showController: true
      }
    });
  }
  closePlayer(){
    this.replayer.$destroy();
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { eventWithTime, event } from '@rrweb/types';
import { record, Replayer, ReplayerEvents } from 'rrweb';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, DividerModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  title = 'testing-tools';
  events : eventWithTime[] = []
  errorsArray : any = [];
  replayer : any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {

  }

  
}

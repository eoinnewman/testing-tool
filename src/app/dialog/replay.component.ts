import {Component} from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import rrwebPlayer from 'rrweb-player';

@Component({
    templateUrl: './replay.html',
})
export class replayDialog {

    replayer : any;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        //id: this.config.id
        this.playError(this.config.data?.replay);
    }

    playError(item: any){
        if(this.replayer!=undefined){
          this.replayer.$destroy();
        }
        let events = item
        console.log(events)
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
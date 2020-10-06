import { Component, OnInit } from '@angular/core';
import { MessageSercive } from '../message service';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit {

  constructor(private msgService: MessageSercive) { }

  messages = [];

  ngOnInit(): void {
    this.msgService.shareUpdate().subscribe(msgs=>{
      this.messages = msgs;
    }

    )
  }

}

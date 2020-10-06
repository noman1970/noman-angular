import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageSercive } from '../message service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  constructor(private msgService:MessageSercive) { }


  ngOnInit(): void {
  }
  onAddMessage(form:NgForm){

    this.msgService.addMessage(form.value.title,form.value.description);

  }

}

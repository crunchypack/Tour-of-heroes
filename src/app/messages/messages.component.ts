import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  // messageService must be public to be able to bind it.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}

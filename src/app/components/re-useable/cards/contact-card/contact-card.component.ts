import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  constructor() {}

  @Input() user_email;
  @Input() user_github;
  @Input() user_linkedin;

  ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  constructor() {}

  @Input() user_experience;

  ngOnInit() {}
}

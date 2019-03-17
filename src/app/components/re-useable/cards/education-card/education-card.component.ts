import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
  constructor() {}

  @Input() school_name;
  @Input() school_period;
  @Input() school_result;

  ngOnInit() {}
}

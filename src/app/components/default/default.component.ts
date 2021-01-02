import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  component;
  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event): void {
    this.component = event;
  }

}

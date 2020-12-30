import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defalult',
  templateUrl: './defalult.component.html',
  styleUrls: ['./defalult.component.css']
})
export class DefalultComponent implements OnInit {
  component;
  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event): void {
    this.component = event;
  }

}

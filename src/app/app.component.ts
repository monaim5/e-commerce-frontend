import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'e-commerce-frontend';
  mediaSub: Subscription;

  constructor(public observer: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.observer.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}

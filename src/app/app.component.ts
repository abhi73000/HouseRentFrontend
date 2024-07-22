import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription = new Subscription;
  deviceXs: boolean = false;
  title = 'houserental';
  sideBarOpen = false;

  constructor(public mediaObserver: MediaObserver ) { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      for (const change of changes) {
        console.log(change.mqAlias);
        this.deviceXs = change.mqAlias === 'xs' ? true : false;
      }
    });

  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe(); // Unsubscribe to prevent memory leaks
  }
}

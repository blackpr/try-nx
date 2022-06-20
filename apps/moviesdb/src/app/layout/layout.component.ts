import { Component, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tim-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  private readonly mediaWatcher: Subscription;
  constructor(media: MediaObserver) {
    this.mediaWatcher = media
      .asObservable()
      .subscribe((changes: MediaChange[]) => {
        // console.log(changes);
        const change = changes[0];
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          if (this.sideNavOpened) {
            this.sideNavOpened = false;
          }
          this.sideNavMode = 'over';
        } else {
          this.sideNavOpened = true;
          this.sideNavMode = 'side';
        }
        if (change.mqAlias === 'xs') {
          this.toolBarHeight = 56;
        } else {
          this.toolBarHeight = 64;
        }
      });
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }
}

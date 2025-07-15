import { Component, Output, EventEmitter, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.css']
})
export class Loader implements AfterViewInit {
  progress = -1; // Start at -1 to avoid ExpressionChanged error
  show = true;
  @Output() loaded = new EventEmitter<void>();

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.trackImageLoading()); // Defer to next tick
  }

  private trackImageLoading() {
    const images = Array.from(document.images);
    const total = images.length;
    let loaded = 0;

    if (total === 0) {
      this.ngZone.run(() => {
        this.progress = 100;
        this.show = false;
        this.cdr.detectChanges();
        this.loaded.emit();
      });
      return;
    }

    const updateProgress = () => {
      loaded++;
      this.ngZone.run(() => {
        this.progress = Math.round((loaded / total) * 100);
        if (loaded === total) {
          setTimeout(() => {
            this.show = false;
            this.cdr.detectChanges();
            this.loaded.emit();
          }, 300);
        }
        this.cdr.detectChanges();
      });
    };

    images.forEach(img => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress);
      }
    });
  }
}

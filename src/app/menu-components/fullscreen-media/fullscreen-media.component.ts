import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fullscreen-media',
  templateUrl: './fullscreen-media.component.html',
  styleUrls: ['./fullscreen-media.component.css']
})
export class FullscreenMediaComponent {
  private _mediaSrc: string | null = null;
  private _mediaType: string | null = null;

  @Input() 
  set mediaSrc(src: string | null) {
    this._mediaSrc = src;
  }

  get mediaSrc(): string {
    return this._mediaSrc as string;
  }

  @Input()
  set mediaType(type: string | null) {
    this._mediaType = type;
  }

  get mediaType(): string {
    return this._mediaType as string;
  }

  @Output() close = new EventEmitter<void>();

  closeMedia() {
    this.close.emit();
  }
}


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMediaComponent } from './fullscreen-media.component';

describe('FullscreenMediaComponent', () => {
  let component: FullscreenMediaComponent;
  let fixture: ComponentFixture<FullscreenMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenMediaComponent]
    });
    fixture = TestBed.createComponent(FullscreenMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

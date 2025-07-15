import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollUp } from './scroll-up';

describe('ScrollUp', () => {
  let component: ScrollUp;
  let fixture: ComponentFixture<ScrollUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

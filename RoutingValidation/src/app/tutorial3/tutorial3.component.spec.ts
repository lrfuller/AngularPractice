import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial3Component } from './tutorial3.component';

describe('Tutorial3Component', () => {
  let component: Tutorial3Component;
  let fixture: ComponentFixture<Tutorial3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tutorial3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

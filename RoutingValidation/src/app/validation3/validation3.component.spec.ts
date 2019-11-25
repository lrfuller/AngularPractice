import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation3Component } from './validation3.component';

describe('Validation3Component', () => {
  let component: Validation3Component;
  let fixture: ComponentFixture<Validation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Validation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Validation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

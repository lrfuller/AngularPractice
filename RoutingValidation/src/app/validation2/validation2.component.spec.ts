import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation2Component } from './validation2.component';

describe('Validation2Component', () => {
  let component: Validation2Component;
  let fixture: ComponentFixture<Validation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Validation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Validation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

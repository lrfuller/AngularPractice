import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicForm2Component } from './basic-form2.component';

describe('BasicForm2Component', () => {
  let component: BasicForm2Component;
  let fixture: ComponentFixture<BasicForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

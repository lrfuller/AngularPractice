import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalV2Component } from './external-v2.component';

describe('ExternalV2Component', () => {
  let component: ExternalV2Component;
  let fixture: ComponentFixture<ExternalV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingFrontEndComponent } from './testing-front-end.component';

describe('TestingFrontEndComponent', () => {
  let component: TestingFrontEndComponent;
  let fixture: ComponentFixture<TestingFrontEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingFrontEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

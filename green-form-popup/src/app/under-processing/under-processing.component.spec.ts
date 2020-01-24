import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderProcessingComponent } from './under-processing.component';

describe('UnderProcessingComponent', () => {
  let component: UnderProcessingComponent;
  let fixture: ComponentFixture<UnderProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

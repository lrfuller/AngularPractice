import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSplitComponent } from './general-split.component';

describe('GeneralSplitComponent', () => {
  let component: GeneralSplitComponent;
  let fixture: ComponentFixture<GeneralSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

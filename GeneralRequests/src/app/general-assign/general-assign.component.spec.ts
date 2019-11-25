import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAssignComponent } from './general-assign.component';

describe('GeneralAssignComponent', () => {
  let component: GeneralAssignComponent;
  let fixture: ComponentFixture<GeneralAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

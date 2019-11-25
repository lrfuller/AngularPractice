import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEditableComponent } from './general-editable.component';

describe('GeneralEditableComponent', () => {
  let component: GeneralEditableComponent;
  let fixture: ComponentFixture<GeneralEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

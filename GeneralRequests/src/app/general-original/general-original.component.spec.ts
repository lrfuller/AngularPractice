import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralOriginalComponent } from './general-original.component';

describe('GeneralOriginalComponent', () => {
  let component: GeneralOriginalComponent;
  let fixture: ComponentFixture<GeneralOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralOriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

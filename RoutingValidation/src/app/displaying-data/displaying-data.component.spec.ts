import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingDataComponent } from './displaying-data.component';

describe('DisplayingDataComponent', () => {
  let component: DisplayingDataComponent;
  let fixture: ComponentFixture<DisplayingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

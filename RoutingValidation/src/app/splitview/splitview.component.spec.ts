import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitviewComponent } from './splitview.component';

describe('SplitviewComponent', () => {
  let component: SplitviewComponent;
  let fixture: ComponentFixture<SplitviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

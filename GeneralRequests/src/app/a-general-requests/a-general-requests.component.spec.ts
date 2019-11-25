import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGeneralRequestsComponent } from './a-general-requests.component';

describe('AGeneralRequestsComponent', () => {
  let component: AGeneralRequestsComponent;
  let fixture: ComponentFixture<AGeneralRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGeneralRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGeneralRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

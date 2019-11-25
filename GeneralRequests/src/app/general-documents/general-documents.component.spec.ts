import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDocumentsComponent } from './general-documents.component';

describe('GeneralDocumentsComponent', () => {
  let component: GeneralDocumentsComponent;
  let fixture: ComponentFixture<GeneralDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

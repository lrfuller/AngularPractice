import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputTutorialComponent } from './user-input-tutorial.component';

describe('UserInputTutorialComponent', () => {
  let component: UserInputTutorialComponent;
  let fixture: ComponentFixture<UserInputTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

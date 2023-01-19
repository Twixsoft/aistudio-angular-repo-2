import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics06Component } from './statistics06.component';

describe('Statistics06Component', () => {
  let component: Statistics06Component;
  let fixture: ComponentFixture<Statistics06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statistics06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statistics06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

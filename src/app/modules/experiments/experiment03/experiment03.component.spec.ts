import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment03Component } from './experiment03.component';

describe('Experiment03Component', () => {
  let component: Experiment03Component;
  let fixture: ComponentFixture<Experiment03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

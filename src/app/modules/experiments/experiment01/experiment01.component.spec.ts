import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment01Component } from './experiment01.component';

describe('Experiment01Component', () => {
  let component: Experiment01Component;
  let fixture: ComponentFixture<Experiment01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

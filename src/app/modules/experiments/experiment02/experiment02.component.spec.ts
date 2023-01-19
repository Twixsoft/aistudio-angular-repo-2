import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment02Component } from './experiment02.component';

describe('Experiment02Component', () => {
  let component: Experiment02Component;
  let fixture: ComponentFixture<Experiment02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

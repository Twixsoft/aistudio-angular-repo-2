import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advanceoption04Component } from './advanceoption04.component';

describe('Advanceoption04Component', () => {
  let component: Advanceoption04Component;
  let fixture: ComponentFixture<Advanceoption04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advanceoption04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advanceoption04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

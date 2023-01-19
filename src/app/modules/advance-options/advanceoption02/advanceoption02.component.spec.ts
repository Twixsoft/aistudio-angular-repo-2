import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advanceoption02Component } from './advanceoption02.component';

describe('Advanceoption02Component', () => {
  let component: Advanceoption02Component;
  let fixture: ComponentFixture<Advanceoption02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advanceoption02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advanceoption02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

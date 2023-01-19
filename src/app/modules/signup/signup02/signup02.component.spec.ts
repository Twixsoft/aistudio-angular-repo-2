import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup02Component } from './signup02.component';

describe('Signup02Component', () => {
  let component: Signup02Component;
  let fixture: ComponentFixture<Signup02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

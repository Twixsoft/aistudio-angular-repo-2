import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup03Component } from './signup03.component';

describe('Signup03Component', () => {
  let component: Signup03Component;
  let fixture: ComponentFixture<Signup03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

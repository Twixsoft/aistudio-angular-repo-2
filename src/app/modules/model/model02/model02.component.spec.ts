import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model02Component } from './model02.component';

describe('Model02Component', () => {
  let component: Model02Component;
  let fixture: ComponentFixture<Model02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

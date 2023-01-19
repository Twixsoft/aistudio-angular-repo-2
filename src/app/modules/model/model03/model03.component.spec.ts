import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model03Component } from './model03.component';

describe('Model03Component', () => {
  let component: Model03Component;
  let fixture: ComponentFixture<Model03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

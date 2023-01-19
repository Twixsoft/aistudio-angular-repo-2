import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model01Component } from './model01.component';

describe('Model01Component', () => {
  let component: Model01Component;
  let fixture: ComponentFixture<Model01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

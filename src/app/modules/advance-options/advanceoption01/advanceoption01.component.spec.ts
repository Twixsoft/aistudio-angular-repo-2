import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advanceoption01Component } from './advanceoption01.component';

describe('Advanceoption01Component', () => {
  let component: Advanceoption01Component;
  let fixture: ComponentFixture<Advanceoption01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advanceoption01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advanceoption01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

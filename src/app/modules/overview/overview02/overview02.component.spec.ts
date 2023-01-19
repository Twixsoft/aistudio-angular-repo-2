import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview02Component } from './overview02.component';

describe('Overview02Component', () => {
  let component: Overview02Component;
  let fixture: ComponentFixture<Overview02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

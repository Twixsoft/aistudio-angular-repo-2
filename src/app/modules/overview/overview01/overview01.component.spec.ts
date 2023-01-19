import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview01Component } from './overview01.component';

describe('Overview01Component', () => {
  let component: Overview01Component;
  let fixture: ComponentFixture<Overview01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

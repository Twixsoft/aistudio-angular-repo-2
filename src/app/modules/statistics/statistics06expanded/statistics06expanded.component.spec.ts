import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics06expandedComponent } from './statistics06expanded.component';

describe('Statistics06expandedComponent', () => {
  let component: Statistics06expandedComponent;
  let fixture: ComponentFixture<Statistics06expandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statistics06expandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statistics06expandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

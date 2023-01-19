import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddNewDataConnectionComponent } from './main-add-new-data-connection.component';

describe('MainAddNewDataConnectionComponent', () => {
  let component: MainAddNewDataConnectionComponent;
  let fixture: ComponentFixture<MainAddNewDataConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAddNewDataConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddNewDataConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

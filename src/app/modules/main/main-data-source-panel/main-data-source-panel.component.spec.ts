import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDataSourcePanelComponent } from './main-data-source-panel.component';

describe('MainDataSourcePanelComponent', () => {
  let component: MainDataSourcePanelComponent;
  let fixture: ComponentFixture<MainDataSourcePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDataSourcePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDataSourcePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

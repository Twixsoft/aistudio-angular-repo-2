import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLearnMoreComponent } from './main-learn-more.component';

describe('MainLearnMoreComponent', () => {
  let component: MainLearnMoreComponent;
  let fixture: ComponentFixture<MainLearnMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLearnMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

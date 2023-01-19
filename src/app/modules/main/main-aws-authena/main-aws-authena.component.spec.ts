import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAwsAuthenaComponent } from './main-aws-authena.component';

describe('MainAwsAuthenaComponent', () => {
  let component: MainAwsAuthenaComponent;
  let fixture: ComponentFixture<MainAwsAuthenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAwsAuthenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAwsAuthenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

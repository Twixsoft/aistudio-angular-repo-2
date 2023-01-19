import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAwsAuthenaUrlComponent } from './main-aws-authena-url.component';

describe('MainAwsAuthenaUrlComponent', () => {
  let component: MainAwsAuthenaUrlComponent;
  let fixture: ComponentFixture<MainAwsAuthenaUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAwsAuthenaUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAwsAuthenaUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

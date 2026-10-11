import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysoreTtc } from './mysore-ttc';

describe('MysoreTtc', () => {
  let component: MysoreTtc;
  let fixture: ComponentFixture<MysoreTtc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysoreTtc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysoreTtc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

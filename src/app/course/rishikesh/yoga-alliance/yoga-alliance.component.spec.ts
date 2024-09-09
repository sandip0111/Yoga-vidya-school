/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YogaAllianceComponent } from './yoga-alliance.component';

describe('YogaAllianceComponent', () => {
  let component: YogaAllianceComponent;
  let fixture: ComponentFixture<YogaAllianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaAllianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaAllianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

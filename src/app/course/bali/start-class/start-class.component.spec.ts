/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartClassComponent } from './start-class.component';

describe('StartClassComponent', () => {
  let component: StartClassComponent;
  let fixture: ComponentFixture<StartClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

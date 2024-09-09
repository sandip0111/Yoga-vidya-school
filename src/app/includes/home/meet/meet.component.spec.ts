/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeetComponent } from './meet.component';

describe('MeetComponent', () => {
  let component: MeetComponent;
  let fixture: ComponentFixture<MeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

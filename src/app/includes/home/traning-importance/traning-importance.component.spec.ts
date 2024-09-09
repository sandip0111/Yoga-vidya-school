/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TraningImportanceComponent } from './traning-importance.component';

describe('TraningImportanceComponent', () => {
  let component: TraningImportanceComponent;
  let fixture: ComponentFixture<TraningImportanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraningImportanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraningImportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

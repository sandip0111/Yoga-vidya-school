/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodeConductComponent } from './code-conduct.component';

describe('CodeConductComponent', () => {
  let component: CodeConductComponent;
  let fixture: ComponentFixture<CodeConductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeConductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

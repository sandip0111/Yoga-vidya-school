/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CooperateComponent } from './cooperate.component';

describe('CooperateComponent', () => {
  let component: CooperateComponent;
  let fixture: ComponentFixture<CooperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

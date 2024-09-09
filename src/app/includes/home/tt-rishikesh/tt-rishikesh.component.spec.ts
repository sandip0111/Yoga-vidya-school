/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TtRishikeshComponent } from './tt-rishikesh.component';

describe('TtRishikeshComponent', () => {
  let component: TtRishikeshComponent;
  let fixture: ComponentFixture<TtRishikeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtRishikeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtRishikeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

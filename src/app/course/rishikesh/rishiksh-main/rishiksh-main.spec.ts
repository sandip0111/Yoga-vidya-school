import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RishikshMain } from './rishiksh-main';

describe('RishikshMain', () => {
  let component: RishikshMain;
  let fixture: ComponentFixture<RishikshMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RishikshMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RishikshMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

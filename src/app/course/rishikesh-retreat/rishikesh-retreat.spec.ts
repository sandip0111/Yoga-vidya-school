import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RishikeshRetreat } from './rishikesh-retreat';

describe('RishikeshRetreat', () => {
  let component: RishikeshRetreat;
  let fixture: ComponentFixture<RishikeshRetreat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RishikeshRetreat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RishikeshRetreat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

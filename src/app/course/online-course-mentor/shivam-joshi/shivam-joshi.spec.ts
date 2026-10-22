import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivamJoshi } from './shivam-joshi';

describe('ShivamJoshi', () => {
  let component: ShivamJoshi;
  let fixture: ComponentFixture<ShivamJoshi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShivamJoshi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShivamJoshi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

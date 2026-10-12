import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mysore200 } from './mysore-200';

describe('Mysore200', () => {
  let component: Mysore200;
  let fixture: ComponentFixture<Mysore200>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mysore200]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mysore200);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mysore100 } from './mysore-100';

describe('Mysore100', () => {
  let component: Mysore100;
  let fixture: ComponentFixture<Mysore100>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mysore100]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mysore100);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

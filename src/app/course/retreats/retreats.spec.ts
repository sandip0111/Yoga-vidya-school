import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Retreats } from './retreats';

describe('Retreats', () => {
  let component: Retreats;
  let fixture: ComponentFixture<Retreats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Retreats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Retreats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

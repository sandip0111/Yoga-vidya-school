import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranicPurification } from './pranic-purification';

describe('PranicPurification', () => {
  let component: PranicPurification;
  let fixture: ComponentFixture<PranicPurification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PranicPurification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PranicPurification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

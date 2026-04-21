import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranicPurificationIiComponent } from './pranic-purification-ii.component';

describe('PranicPurificationIiComponent', () => {
  let component: PranicPurificationIiComponent;
  let fixture: ComponentFixture<PranicPurificationIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PranicPurificationIiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PranicPurificationIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

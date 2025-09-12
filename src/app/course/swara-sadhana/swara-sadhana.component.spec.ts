import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaraSadhanaComponent } from './swara-sadhana.component';

describe('SwaraSadhanaComponent', () => {
  let component: SwaraSadhanaComponent;
  let fixture: ComponentFixture<SwaraSadhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwaraSadhanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwaraSadhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

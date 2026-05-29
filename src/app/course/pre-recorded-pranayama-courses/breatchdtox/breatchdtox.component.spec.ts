import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreatchdtoxComponent } from './breatchdtox.component';

describe('BreatchdtoxComponent', () => {
  let component: BreatchdtoxComponent;
  let fixture: ComponentFixture<BreatchdtoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreatchdtoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreatchdtoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrashantPageComponent } from './prashant-page.component';

describe('PrashantPageComponent', () => {
  let component: PrashantPageComponent;
  let fixture: ComponentFixture<PrashantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrashantPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrashantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

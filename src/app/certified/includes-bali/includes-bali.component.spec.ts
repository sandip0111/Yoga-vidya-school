import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludesBaliComponent } from './includes-bali.component';

describe('IncludesBaliComponent', () => {
  let component: IncludesBaliComponent;
  let fixture: ComponentFixture<IncludesBaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncludesBaliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncludesBaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

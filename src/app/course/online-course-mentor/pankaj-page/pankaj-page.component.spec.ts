import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PankajPageComponent } from './pankaj-page.component';

describe('PankajPageComponent', () => {
  let component: PankajPageComponent;
  let fixture: ComponentFixture<PankajPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PankajPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PankajPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

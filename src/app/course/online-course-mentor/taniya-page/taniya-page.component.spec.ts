import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaniyaPageComponent } from './taniya-page.component';

describe('TaniyaPageComponent', () => {
  let component: TaniyaPageComponent;
  let fixture: ComponentFixture<TaniyaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaniyaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaniyaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

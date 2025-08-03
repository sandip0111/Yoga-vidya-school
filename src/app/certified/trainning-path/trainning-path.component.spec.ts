import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainningPathComponent } from './trainning-path.component';

describe('TrainningPathComponent', () => {
  let component: TrainningPathComponent;
  let fixture: ComponentFixture<TrainningPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainningPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainningPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

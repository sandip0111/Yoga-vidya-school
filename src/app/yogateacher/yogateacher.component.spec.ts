import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogateacherComponent } from './yogateacher.component';

describe('YogateacherComponent', () => {
  let component: YogateacherComponent;
  let fixture: ComponentFixture<YogateacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogateacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogateacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

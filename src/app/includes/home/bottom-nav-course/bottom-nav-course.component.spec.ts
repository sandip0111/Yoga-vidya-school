import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavCourseComponent } from './bottom-nav-course.component';

describe('BottomNavCourseComponent', () => {
  let component: BottomNavCourseComponent;
  let fixture: ComponentFixture<BottomNavCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNavCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomNavCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

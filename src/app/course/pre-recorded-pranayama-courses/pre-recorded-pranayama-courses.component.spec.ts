import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRecordedPranayamaCoursesComponent } from './pre-recorded-pranayama-courses.component';

describe('PreRecordedPranayamaCoursesComponent', () => {
  let component: PreRecordedPranayamaCoursesComponent;
  let fixture: ComponentFixture<PreRecordedPranayamaCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreRecordedPranayamaCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreRecordedPranayamaCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

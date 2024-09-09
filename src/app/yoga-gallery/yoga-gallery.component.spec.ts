import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaGalleryComponent } from './yoga-gallery.component';

describe('YogaGalleryComponent', () => {
  let component: YogaGalleryComponent;
  let fixture: ComponentFixture<YogaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnujPageComponent } from './anuj-page.component';

describe('AnujPageComponent', () => {
  let component: AnujPageComponent;
  let fixture: ComponentFixture<AnujPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnujPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnujPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

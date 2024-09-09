import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinomialComponent } from './testinomial.component';

describe('TestinomialComponent', () => {
  let component: TestinomialComponent;
  let fixture: ComponentFixture<TestinomialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestinomialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestinomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplequizComponent } from './simplequiz.component';

describe('SimplequizComponent', () => {
  let component: SimplequizComponent;
  let fixture: ComponentFixture<SimplequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimplequizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColornametohexComponent } from './colornametohex.component';

describe('ColornametohexComponent', () => {
  let component: ColornametohexComponent;
  let fixture: ComponentFixture<ColornametohexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColornametohexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColornametohexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

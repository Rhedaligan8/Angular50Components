import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrenheittocelciusComponent } from './fahrenheittocelcius.component';

describe('FahrenheittocelciusComponent', () => {
  let component: FahrenheittocelciusComponent;
  let fixture: ComponentFixture<FahrenheittocelciusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FahrenheittocelciusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrenheittocelciusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

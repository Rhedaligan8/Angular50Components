import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordstrengthComponent } from './passwordstrength.component';

describe('PasswordstrengthComponent', () => {
  let component: PasswordstrengthComponent;
  let fixture: ComponentFixture<PasswordstrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordstrengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordstrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

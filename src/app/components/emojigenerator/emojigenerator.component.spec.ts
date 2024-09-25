import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojigeneratorComponent } from './emojigenerator.component';

describe('EmojigeneratorComponent', () => {
  let component: EmojigeneratorComponent;
  let fixture: ComponentFixture<EmojigeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmojigeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojigeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

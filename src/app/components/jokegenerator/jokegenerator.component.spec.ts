import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokegeneratorComponent } from './jokegenerator.component';

describe('JokegeneratorComponent', () => {
  let component: JokegeneratorComponent;
  let fixture: ComponentFixture<JokegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokegeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

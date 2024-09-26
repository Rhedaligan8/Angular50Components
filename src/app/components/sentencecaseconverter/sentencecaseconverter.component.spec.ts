import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencecaseconverterComponent } from './sentencecaseconverter.component';

describe('SentencecaseconverterComponent', () => {
  let component: SentencecaseconverterComponent;
  let fixture: ComponentFixture<SentencecaseconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentencecaseconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentencecaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

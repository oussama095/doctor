import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionDetailsComponent } from './transcription-details.component';

describe('TranscriptionDetailsComponent', () => {
  let component: TranscriptionDetailsComponent;
  let fixture: ComponentFixture<TranscriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

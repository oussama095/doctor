import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionOverviewComponent } from './transcription-overview.component';

describe('TranscriptionOverviewComponent', () => {
  let component: TranscriptionOverviewComponent;
  let fixture: ComponentFixture<TranscriptionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptionOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

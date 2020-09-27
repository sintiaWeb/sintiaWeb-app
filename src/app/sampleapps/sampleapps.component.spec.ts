import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleappsComponent } from './sampleapps.component';

describe('SampleappsComponent', () => {
  let component: SampleappsComponent;
  let fixture: ComponentFixture<SampleappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

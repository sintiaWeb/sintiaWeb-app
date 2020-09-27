import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcareerComponent } from './aboutcareer.component';

describe('AboutcareerComponent', () => {
  let component: AboutcareerComponent;
  let fixture: ComponentFixture<AboutcareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutcareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

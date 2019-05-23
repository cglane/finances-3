import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let rows: NodeList
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rows = fixture.nativeElement.querySelectorAll('.row')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(rows.length).toBe(3);
  });
});

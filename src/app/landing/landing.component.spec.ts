import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let rows: NodeList
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [LandingComponent,]
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
  });
  it('should only have four rows', () => {
    expect(rows.length).toBe(4);
  })
});

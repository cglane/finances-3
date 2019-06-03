import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let tabs: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [DashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tabs = fixture.nativeElement.querySelector('.mat-tab-labels');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(tabs.children.length).toEqual(3)
  });

});

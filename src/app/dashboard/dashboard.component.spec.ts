import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should trigger a click event', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let comp = fixture.componentInstance;
      spyOn(comp, 'clicked');

      let el = fixture.debugElement.query(By.css('button')).nativeElement.click();
      print(el, 'el')
      expect(comp.clicked).toHaveBeenCalled();
    });
  });
});
